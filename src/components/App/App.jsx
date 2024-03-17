import Loyaut from 'components/Loyaut/Loyaut';
import MainAccessories from 'pages/MainAccessories';
import MainMen from 'pages/MainMen';
import MainShares from 'pages/MainShares';
import MainWomen from 'pages/MainWomen';
import data from 'data.json';
import feedbackData from 'feedbackData.json';
import { Route, Routes } from 'react-router-dom';
import Latest from 'pages/Latest';
console.log(data, feedbackData);
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Loyaut />}>
        <Route index element={<Latest />} />
        <Route path="men" element={<MainMen />} />
        <Route path="women" element={<MainWomen />} />
        <Route path="accessories" element={<MainAccessories />} />
        <Route path="shares" element={<MainShares />} />
      </Route>
    </Routes>
  );
}
