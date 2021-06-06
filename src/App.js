import {Component} from 'react';
import './app.styles.scss';

class App extends Component {
  render() {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='text-black font-bold rounded-lg border shadow-lg p-10 m-20'>
          <div>
            Webpack 5 boilerplate with React 17, Tailwind 2, using babel, sass,
            with a hot dev server and an optimized production build
          </div>
        </div>
      </div>
    );
  }
}

export default App;
