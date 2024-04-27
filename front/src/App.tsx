import React from 'react';
import './App.scss';
import CategoryTag from "./components/CategoryTag/CategoryTag";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
        <CategoryTag content={'test'} />
        <Button content={'View all'} icon={false} filled={true} />
        <Button content={'Read more'} icon={true} filled={false} />
        <Card
            thumbnail={'https://via.placeholder.com/500'}
            category={'DIY'}
            title={'Travelling as a way of self-discovery and progress'}
            excerpt={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'}
            time_read={'5'}
        />
        <Home />

    </div>
  );
}

export default App;
