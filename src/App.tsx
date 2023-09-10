import ListGroup from "./components/ListGroup";
function App() {
  let items = [
    'New York',
    'Paris',
    'Los Angels',
    'Tokyo'
];
let items1 = [
  'USA',
  'USA',
  'TUNISIA',
  'JAPAN'
];

const handleSelectItem = (item: string) => {
  console.log(item)
}
  return <div>
            <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>
            {/* <ListGroup items={items1} heading={"Countries"} /> */}
            </div>
}

export default App;