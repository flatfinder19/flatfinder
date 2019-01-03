import React, { Component } from 'react';

const Store = React.createContext();

// create a provider
export class StoreProvider extends Component {
  state = {
    isLoadingComplete: false
  };

  appReady = () => {
    this.setState({
      isLoading: false
    });
  };

  render() {
    return (
      <Store.Provider
        value={{
          store: this.state,
          appReady: this.appReady
        }}
      >
        {this.props.children}
      </Store.Provider>
    );
  }
}

// for components to access the store
export const StoreConsumer = Store.Consumer;
