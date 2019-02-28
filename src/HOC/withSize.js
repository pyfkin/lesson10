import React from 'react';

const withSize = (Component) =>{
    return class extends React.Component
    {
        constructor(props){
            super(props);

            this.myRef = React.createRef();
        }

        componentDidMount(){
            console.log(Component.name);
            console.log(this.myRef.current.clientHeight);
            console.log(this.myRef.current.clientWidth);
        }


        render(){
            return(
                <div ref={this.myRef}>
                    <Component {...this.props}/>
                </div>
            )
        }
    }
};

export default withSize;