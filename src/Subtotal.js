import React, {Component} from 'react';
import Total from './Total';

class Subtotal extends Component {
    render() {
        //subtotal list -- render function
        const summary = Object.keys(this.props.selected)
            .map(key => <div className="summary__option" key={key}>
                <div className="summary__option__label">{key}  </div>
                <div className="summary__option__value">{this.props.selected[key].name}</div>
                <div className="summary__option__cost">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                        .format(this.props.selected[key].cost)}
                </div>
            </div>)
        return(
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {summary}
                <Total total={this.props.total}/>
            </section>
        )
    }
}

export default Subtotal;