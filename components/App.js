import React, { Component } from 'react'
import GetComponent from './GetComponent'
import classnames from 'classnames'

import Header1 from './Header/Header1'
class App extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        components: [],
        block: {
            acf_fc_layout: null,
            section_css_class: null
        }
    }

    componentDidMount() {
        // console.log(this.props)
    }

    render() {
        return (
            <div>
                <Header1 
                    title="Blokk Wireframe Kit11" 
                    subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    imgUrl="https://d30y9cdsu7xlg0.cloudfront.net/png/50320-200.png" />
                { this.props.components.map((block, i) => {
                        const cssClass = classnames('section-'+block.acf_fc_layout, block.section_css_class)
                        return (
                            <section key={i} className={cssClass}>
                                <GetComponent block={block} />
                            </section>
                        )
                    } ) 
                }
            </div>
        );
    }
}

export default App;