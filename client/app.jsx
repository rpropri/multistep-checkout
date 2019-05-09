
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 0,
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      cc: '',
      expiry: '',
      cvv: '',
      billZip: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.createPurchase = this.createPurchase.bind(this);
  }
  render() {
    let phase = this.state.phase;
    return (
      <div>
        {phase === 0 ? <div /> :
        phase === 1 ? <F1 handleChange={this.handleChange} /> :
        phase === 2 ? <F2 handleChange={this.handleChange} /> :
        phase === 3 ? <F3 handleChange={this.handleChange} /> :
        phase === 4 ? <F4 state={this.state} createPurchase={this.createPurchase}/> : <div />}
        <input 
          type="submit" 
          value={phase === 0 ? "Checkout" :
        phase <= 3 ? "Continue" : "Review Order"} onClick={this.nextStep}></input>
      </div>
    );
  }
  handleChange(e) {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }
  nextStep(e) {
    e.preventDefault();
    let phase = this.state.phase + 1;
    this.setState({phase});
  }
  createPurchase(e) {
    e.preventDefault();
    console.log('do database stuff');
  }
};
  
const F1 = (props) => {
  return (
  <form name="f1">
    <label>full name:</label>
    <input 
      type="text"
      name="name"
      onChange={props.handleChange}>
    </input><br></br>
    <label>email address:</label>
    <input
      type="email" 
      name="email" 
      onChange={props.handleChange}>
    </input><br></br>
    <label>password:</label>
    <input 
      type="password" 
      name="password" 
      onChange={props.handleChange}>
    </input><br></br>
  </form>
)};

const F2 = (props) => {
  return (
  <form name="f2">
    <p>ship-to address:</p><br></br>
      <label>line 1:</label>
      <input 
        type="text" 
        name="line1"
        onChange={props.handleChange}>
      </input><br></br>
      <label>line 2:</label>
      <input 
        type="text" 
        name="line2"
        onChange={props.handleChange}>
      </input><br></br>
      <label>city:</label>
      <input 
        type="text" 
        name="city"
        onChange={props.handleChange}>
      </input><br></br>
      <label>state:</label>
      <input 
        type="text" 
        name="state"
        onChange={props.handleChange}>
      </input><br></br>
      <label>zip code:</label>
      <input 
        type="text" 
        name="zip"
        onChange={props.handleChange}>
      </input><br></br>
      <label>phone number:</label>
      <input
        type="text"
        name="phone"
        onChange={props.handleChange}>
      </input><br></br>
  </form >
)};

const F3 = (props) => {
  return (
  <form name="f3">
      <label>credit card number:</label>
      <input 
        type="text" 
        name="cc"
        onChange={props.handleChange}>
      </input><br></br>
      <label>expiration date:</label>
      <input 
        type="date" 
        name="expiry"
        onChange={props.handleChange}>
      </input><br></br>
      <label>CVV code:</label>
      <input 
        type="text"
        name="cvv"
        onChange={props.handleChange}>
        </input><br></br>
      <label>billing zip code:</label>
      <input 
        type="text" 
        name="billZip"
        onChange={props.handleChange}>
      </input><br></br>
  </form>
)};

const F4 = (props) => {
  let state = props.state;
  return (
    <div>
      <ul id="review">
        <li><label>Name: </label>{state.name}</li>
        <li><label>email: </label>{state.email}</li>
        <li><label>Etc. </label>etc.</li>
      </ul>
      <input 
        type="submit" 
        onClick={props.createPurchase} 
        value="Purchase">
      </input>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));