import React, {  useEffect, useState } from 'react'
import './filterComponent.css'
import { CardState } from '../../context/Context';
import { getAllProduct, getColor, getMaterial } from '../../services/service';

const FilterComponent = () => {
    const [allProducts, setAllProducts] = useState(null)
    const [result, setResult] = useState(null)
    const [material, setMaterial] = useState(null);
    const [colors, setColors] = useState(null);
    const { state, dispatch } = CardState();

    const InitialFilters = {
        material: "all",
        color: "all"
    };
    const [filter, setFilter] = useState(InitialFilters);

    useEffect(() => {
        const fn = async () => {
            const data = await getAllProduct();
            setResult(data);
            setAllProducts(data);
        }
        fn();
    }, []);

    useEffect(() => {
        const fn = async () => {
            const data = await getMaterial();
            setMaterial(data);
        }
        fn();
    }, []);

    useEffect(() => {
        const fn = async () => {
            const data = await getColor();
            setColors(data);
        }
        fn();
    }, []);

    const selectFilters = async (material, color) => {

        setFilter({ material: material, color: color });
        if (material == "all" && color == "all") {
            const data = await getAllProduct();
            setResult(data);
            setAllProducts(data);
            return;
        }
        if (color == "all" && material !== "all") {
            const materialProduct = allProducts.filter((item, key) => {
                if (item.materialId == material)
                    return item;
            })
            setResult(materialProduct);
            return;
        }
        if (material == "all" && color !== "all") {
            const materialProduct = allProducts.filter((item, key) => {
                if (item.colorId == color)
                    return item;
            })
            setResult(materialProduct);
            return;
        }
        const materialProduct = allProducts.filter((item, key) => {
            if (item.materialId === material && item.colorId === color)
                return item;

        })
        setResult(materialProduct);
    }
    console.log(filter);

    return (
        <div>
            <div className='filterbody'>
                <div className='filter'>
                    <h2>Filter</h2>
                    <div className='divv'>
                        <h3>Material</h3>
                        <p onClick={() => selectFilters("all", filter.color)}>All</p>
                        {material &&
                            material.map((item, key) => (
                                <p onClick={() => selectFilters(item.id, filter.color)} key={item.id}> {item.name} </p>
                            ))
                        }
                    </div>
                    <div className='divv'>
                        <h3>Color</h3>
                        <p onClick={() => selectFilters(filter.material, "all")}>All</p>
                        {colors &&
                            colors.map((item, key) => (
                                <p onClick={() => selectFilters(filter.material, item.id)} key={item.id}> {item.name} </p>
                            ))
                        }

                    </div>
                </div>
                <div className='product'>
                    {result &&
                        result.map((item, key) => (
                            <div className='single_product'>
                                <img src={item.image} alt="" />
                                <h3>{item.name}</h3>
                                {material && material.map((materialItem, key) => {
                                    if (materialItem.id == item.materialId)
                                        return <p>{materialItem.name}</p>
                                })}
                                {colors && colors.map((materialItem, key) => {
                                    if (materialItem.id == item.materialId)
                                        return <p>{materialItem.name}</p>
                                })}
                                <h5>INR: {item.price}</h5>
                                <button
                                    onClick={() => {
                                        dispatch({
                                            type: 'ADD_TO_CART',
                                            payload: item

                                        })
                                    }}
                                >Add to Cart</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FilterComponent