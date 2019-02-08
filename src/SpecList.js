import React, {Component} from 'react'
import App from './App'
class SpecList extends Component {
  
 
  
  updateFeature(feature, newValue) {
    console.log()
    const selected = Object.assign({}, this.props.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }
  
  render() {

    const features = Object.keys(this.props.features)
      .map(key => {
        const options = this.props.features[key].map((item, index) => {
          const selectedClass = item.name === this.props.state.selected[key].name ? 'feature__selected' : '';
          const featureClass = 'feature__option ' + selectedClass;
          return <li key={index} className="feature__item">
            <div className={featureClass}

              onClick={e => this.updateFeature(key, item)}>
              {item.name}
              ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                .format(item.cost)})
                </div>
          </li>
        });

        return <div className="feature" key={key}>
          <div className="feature__name">{key}</div>
          <ul className="feature__list">
            {options}
          </ul>
        </div>
      }); 

    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {features}
      </section>
    )
  }

}

export default SpecList