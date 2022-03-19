import './App.css';
import Card from "./card"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/font-awesome/css/font-awesome.css"
let priceCard = [{
  name: "FREE",
  price: 0,
  features:
    [{
      list: "Single User",
      isMute: false
    },
    {
      list: "5GB Storage",
      isMute: false
    },
    {
      list: "Unlimited Public Projects",
      isMute: false
    },
    {
      list: "Community Access",
      isMute: false
    },
    {
      list: "Unlimited Private Projects",
      isMute: true
    },
    {
      list: "Dedicated Phone Support",
      isMute: true
    },
    {
      list: "Free Subdomain",
      isMute: true
    },
    {
      list: "Monthly Status Reports",
      isMute: true
    }]
},
{
  name: "PRO",
  price: 9,
  features:
    [{
      list: "5 Users",
      isMute: false,
      isBold: true
    },
    {
      list: "50GB Storage",
      isMute: false
    },
    {
      list: "Unlimited Public Projects",
      isMute: false
    },
    {
      list: "Community Access",
      isMute: false
    },
    {
      list: "Unlimited Private Projects",
      isMute: false
    },
    {
      list: "Dedicated Phone Support",
      isMute: false
    },
    {
      list: "Free Subdomain",
      isMute: false
    },
    {
      list: "Monthly Status Reports",
      isMute: true
    }]
},
{
  name: "PLUS",
  price: 49,
  features:
    [{
      list: "Unlimited Users",
      isMute: false,
      isBold: true
    },
    {
      list: "150GB Storage",
      isMute: false
    },
    {
      list: "Unlimited Public Projects",
      isMute: false
    },
    {
      list: "Community Access",
      isMute: false
    },
    {
      list: "Unlimited Private Projects",
      isMute: false
    },
    {
      list: "Dedicated Phone Support",
      isMute: false
    },
    {
      list1: "Unlimited",
      list: "Free Subdomains",
      isMute: false,

    },
    {
      list: "Monthly Status Reports",
      isMute: false
    }]
},
]
function App() {
  return (
    <div className="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              priceCard.map((card) => {
                return <Card priceData={card} key={card.name} />
              }
              )}

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
