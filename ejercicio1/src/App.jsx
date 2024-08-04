function App() {
  const calculateDiscount = (price, discount) => {
    return price * ((100 - discount) / 100);
  };
  return (
    <>
      <h1>Price Discount Calculator</h1>
      <p>Original Price: $100</p>
      <p>Discount: 20%</p>
      <p>Original Price: $ {calculateDiscount(100, 20)}</p>
    </>
  );
}

export default App;
