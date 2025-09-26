import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import { GridContainer, MainWrapper } from '../style';
import SearchBar from '../components/SearchBar';
import { getProducts } from '../reducers/homeReducer';
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from '../components/ProductCard/ProductSkeleton';
import Filter from '../components/Filter';

const ITEMS_COUNT = 10;

function Home() {
  const { allItems } = useSelector((state) => state.home);
  const [visibleItems, setVisibleItems] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    paid: false,
    free: false,
    viewOnly: false,
  });

  const dispatch = useDispatch();
  const loaderRef = useRef(null);

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredItems = allItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesFilter = true;
    if (filters.paid) matchesFilter = matchesFilter && item.pricingOption === 0;
    if (filters.free) matchesFilter = matchesFilter && item.pricingOption === 1;
    if (filters.viewOnly)
      matchesFilter = matchesFilter && item.pricingOption === 2;

    return matchesSearch && matchesFilter;
  });

  useEffect(() => {
    setVisibleItems([]);
    setCount(0);
    loadMore(filteredItems, 0);
  }, [allItems, searchQuery, filters]);

  const loadMore = (data = filteredItems, start = count) => {
    if (start >= data.length) return;
    setIsLoading(true);

    setTimeout(() => {
      const nextBatch = data.slice(start, start + ITEMS_COUNT);
      setVisibleItems((prev) => [...prev, ...nextBatch]);
      setCount(start + ITEMS_COUNT);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [filteredItems, isLoading]);

  return (
    <div>
      <Header />
      <MainWrapper>
        {/* SearchBar */}
        <SearchBar value={searchQuery} handleChange={setSearchQuery} />

        <Filter filters={filters} onChange={handleFilterChange} />

        {/* Grid of visible items */}
        <GridContainer>
          {visibleItems.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </GridContainer>

        {/* Skeletons */}
        {isLoading && (
          <GridContainer>
            {Array.from({ length: ITEMS_COUNT }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </GridContainer>
        )}

        {/* Invisible div to trigger infinite scroll */}
        <div ref={loaderRef} style={{ height: '20px' }}></div>
      </MainWrapper>
    </div>
  );
}

export default Home;
