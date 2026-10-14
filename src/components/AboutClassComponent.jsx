import React from "react";

export class About extends React.Component {

    constructor(props) {
        super(props);
        const { name, email } = props;
    }

    componentDidMount(){
        //execute after initial render
    }

    componentDidUpdate(){
        //execute after subsequential render, when props changed, or state changed
    }

    componentWillUnmount(){
        //execute when component is exit from route
    }

    render() {
        return (
            <div>This is About Page for to introducing class component</div>
        )
    }
}