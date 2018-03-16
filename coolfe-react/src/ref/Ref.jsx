import React from 'react';

class Ref extends React.Component {
    state = {
        show: false,
    }
    onclick = () => {
        {/*this.setState((prevState) => ({
            show: !prevState.show
        }))*/}
        this.setState({
            show: true,
        })
        setTimeout(() => {
            this.inputText.focus()
        }, 200);
    }
    oncancle = () => {
        this.setState({
            show: false,
        })
    }
    render() {
        return (
            <div>
                <button
                    onClick={this.onclick}
                >点击显示</button>
                {this.state.show ?
                    <div>
                        <input
                            type="text"
                            value='some text'
                            ref={(input) => {
                                this.inputText = input
                            }}
                            onFocus={(e) => {
                                var value = e.target.value;
                                e.target.value = '';
                                e.target.value = value;

                            }}
                        />
                        <button onClick={this.oncancle}>cancel</button>
                    </div> : ''}
            </div>
        )
    }
}

export default Ref;