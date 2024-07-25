
function List(props) {
    const itemList = props.items;
    const fruits = [{id: 1, name: "apple", calories: 32},
                    {id: 2, name: "orange", calories: 54},
                    {id: 3, name: "coconut", calories: 109}];

    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALFABETICO
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //ALFABETICO EN REVERSA
    //fruits.sort((a,b) => a.calories - b.calories); //POR CALORIAS

    const lCFruits = itemList.filter(item => item.calories < 100)

    const listItems = lCFruits.map(lCFruit => <li key={lCFruit.id}>
                                    {lCFruit.name}: &nbsp; <b>{lCFruit.calories}</b></li>);
    
    return ( <ul>{listItems}</ul> );
}

export default List