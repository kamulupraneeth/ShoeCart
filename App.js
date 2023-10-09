import React from 'react';
import MainApp from './MainApp';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store,persistor } from './src/store/ConfigureStore';

console.log('store value',store);

function App(){
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <MainApp/>
      </PersistGate>
    </Provider>
  );
}
export default App;
