import Header from './Header';
import Flower from './Flower';
import './App.css';

function App() {
  return (
    <div dir="rtl">
      <Header />
      <main style={{ padding: "20px" }}>
        <p>ברוכים הבאים לגינה שלי!</p>
        
        {/* הפרחים המקוריים */}
        <Flower flowerName="תורמוס" petalColor="plum" centerColor="purple" />
        <Flower flowerName="נרקיס" petalColor="lightgoldenrodyellow" centerColor="darkorange" />
        <Flower flowerName="כלנית" petalColor="lightpink" centerColor="firebrick" />

        <hr />
        <p>מופע בדיקה לברירת מחדל (סעיף 11):</p>

        {/* מופע 1: שם וצבע עלי כותרת בלבד */}
        <Flower flowerName="חרצית" petalColor="gold" />

        {/* מופע 2: שם וצבע עלה מרכזי בלבד */}
        <Flower flowerName="שושן" centerColor="darkgreen" />

        {/* מופע 3: שם הפרח בלבד */}
        <Flower flowerName="רקפת" />
      </main>
    </div>
  );
}

export default App;