import * as React from 'react'
import LocationsList from '../../../common/components/LocationsList'

const locations = [{
  id: 'a',
  name: 'Mc Donalds',
  address: 'R. caralhito',
}, {
  id: 'b',
  name: 'Jorge Risco',
  address: 'R. Cantareira, 123',
}]

export default () => <LocationsList locations={locations} />
