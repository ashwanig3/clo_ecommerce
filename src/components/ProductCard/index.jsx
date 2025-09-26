import { Card } from '@mui/material';
import React from 'react'
import { PRICING_OPTIONS } from '../../constants';
import { FlexBox } from '../../style';


function ProductCard({ title, imagePath, creator, price, pricingOption }) {
  return (
    <div>
        <img src={imagePath} width="100%" height="400" />
        <FlexBox style={{ justifyContent: "space-between", alignItems: "center"}}>
            <div>
                <p style={{ fontSize: '14px', margin: 0}}>{title}</p>
                <p style={{ fontSize: '14px', margin: 0}}>{creator}</p>
            </div>
            <div style={{ fontSize: '14px', margin: 0}}>{pricingOption === 0 ? `$${price}` : PRICING_OPTIONS[pricingOption]}</div>
        </FlexBox>

    </div>
  )
}

export default ProductCard;
