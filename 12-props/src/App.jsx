import Card from "./components/Card"
const sw = "https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg"
const emp = "https://file.notion.so/f/f/6e5271d8-2f68-42f5-aa75-5978bbff47fa/8eafc09a-0a73-4e31-b191-bd2a90872950/esb-poster.jpg?id=f274b4ef-64ac-41a8-8a65-508e21adfbe1&table=block&spaceId=6e5271d8-2f68-42f5-aa75-5978bbff47fa&expirationTimestamp=1712152800000&signature=yp2u2KMhAqZ4QaBQK88i6jd6R3rrAPn5hkiLd6SAsIc&downloadName=esb-poster.jpg"
const rofj = "https://file.notion.so/f/f/6e5271d8-2f68-42f5-aa75-5978bbff47fa/79257c57-699e-4683-be54-8f39413b3601/rotj-poster.jpg?id=3f628b5c-c187-4aeb-b13c-bac9f7a93c06&table=block&spaceId=6e5271d8-2f68-42f5-aa75-5978bbff47fa&expirationTimestamp=1712152800000&signature=0pFD3_08VJoGR9T0hCiWbCl__1dsWFyTnhnXH2O0yrQ&downloadName=rotj-poster.jpg"

export default function App() {
  return (
    <>
      <Card title="Pôster: Star Wars (1977)" posterImg={sw}/>
      <Card title="Pôster: Empires Strikes Back (1980)" posterImg={emp}/>
      <Card title="Pôster: Return of the Jedi (1983)" posterImg={rofj}/>
    </>
  )
}