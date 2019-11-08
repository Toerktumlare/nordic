import React from 'react';
import Loader from 'react-loader-spinner';
import catApi from '../../api/catResource';

class AboutView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catImg: '',
      imageLoaded: false,
    };
  }

  componentDidMount() {
    catApi().then((response) => {
      const image = response.data[0];
      this.setState({ catImg: image.url });
    });
  }

  componentWillUnmount() {
    this.setState({ imageLoaded: false });
  }

  handleImageLoaded = () => {
    this.setState({ imageLoaded: true });
  }

  render() {
    const { catImg, imageLoaded } = this.state;

    return (
      <div className="flex flex-column items-center futura w-100">
        <h3 className="futura">About</h3>
        <div className="w-100 flex flex-column items-center">
          <div className={`flex-column items-center futura w-100 ${imageLoaded ? 'flex' : 'dn'}`}>
            <img src={catImg} alt="cat" heigth="300" width="300" onLoad={this.handleImageLoaded} className="ph4" />
          </div>
          <div className={`flex-column items-center justify-center w-100 ${imageLoaded ? 'dn' : 'flex'}`} style={{ width: '300px', height: '200px' }}>
            <Loader type="Circles" color="#357edd" className="pa2" />
            <div className="f7 futura mb3 mt2 i ttu">Opening portal to kitty dimension</div>
          </div>
        </div>
        <div className="futura f7 mt4 pa1">
          {`Nordic-Monitoring 1.0.${process.env.REACT_APP_VERSION}`}
        </div>
        <div className="futura f7 pa1 mb1">Thomas Andolf - 2019 ©</div>
      </div>
    );
  }
}

AboutView.propTypes = {

};

AboutView.defaultProps = {

};

export default AboutView;
