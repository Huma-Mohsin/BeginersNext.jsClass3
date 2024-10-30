//componenets may be export or export default.
import UserData from "../../components/UserData";
import UserInfo from "../../components/userInfo";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1 style={{ fontSize: '2.5rem', color: '#4a90e2', textAlign: 'center', margin: '0' }}>
     Learning Dynamic components</h1>
     
     <UserData name="John Doe" age={28} location="New York" />
     <UserData name="Jane Smit" age={45} location="San francisco"/>
    <br/>

     <div>
            <h1 style={{ fontSize: '2.5rem', color: '#4a90e2', textAlign: 'center', margin: '0' }}>User Information</h1>
           <UserInfo name="sana" age={23} education="BS"/><br/>
           <UserInfo name="saira" age={33} education="BS"/><br/>
           <UserInfo name="sania" age={29} education="BS"/><br/>
        </div>
    </div>
  );
}
