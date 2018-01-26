import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import hoistNonReactStatic from 'hoist-non-react-statics'

export const apolloProviderHOC = (WrappedComponent, client) => {
  class Enhance extends React.Component {
    public render() {
      return (
          <ApolloProvider client={client}>
            <WrappedComponent {...this.props} />
          </ApolloProvider>
      )
    }
  }
  hoistNonReactStatic(Enhance, WrappedComponent)
  return Enhance
}
