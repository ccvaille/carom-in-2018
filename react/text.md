- Pure function
```
// class MainLayout extends React.Component {
//     render() {
//         return (
//             <div className="main-layout">
//                 {this.props.children}
//                 <h2>Hello World</h2>
//             </div>
//         );
//     }
// }

function MainLayout(props) {
    return (
        <div className="main-layout">
            {props.children}
            <h2>Hello World</h2>
        </div>
    );
}
```