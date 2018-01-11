class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility(){
    this.setState((prevState) => {
        return {
          visibility: !prevState.visibility
        };
      });
    }

  render(){
    return (
    <div>
      <h1>Visibility Toggle</h1>
          <button onClick={this.handleToggleVisibility} >
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
          </button>
      { this.state.visibility && (
        <p> Hey, There are some details you can now see!</p>
      )}
    </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

//old way
// let show = false;
// let botonMsg = 'Show Details';
// const showSec = () => {
//   if (show){
//   show = false;
//   botonMsg = 'Show Details';
//   }else{
//     show = true;
//     botonMsg = 'Hide Details';
//   }
//   renderVisible();
// };
//
// const appRoot = document.getElementById('app');
//
// const renderVisible = () => {
//   const templateTwo = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={showSec} >{botonMsg}</button>
//       { show && (
//         <p> Hey, There are some details you can now see!</p>
//       )}
//     </div>
//   );
//
//   ReactDOM.render(templateTwo, appRoot);
// };
//
// renderVisible();
