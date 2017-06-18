import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, Message, Card, Icon, Image, Header, Table} from 'semantic-ui-react'
import { removeCity } from '../Actions/test';
class WeatherCity extends React.Component {
    render() {
    const {weather, removeCity} = this.props
        return(
        <Table inverted>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>City</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Temp</Table.HeaderCell>
                <Table.HeaderCell>Weather</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
            <Table.Body>
            <Table.Row>
                <Table.Cell>{weather.name}</Table.Cell>
                <Table.Cell>{new Date(weather.dt*1000).toDateString()}</Table.Cell>
                <Table.Cell>{`°${weather.main.temp}`}</Table.Cell>
                <Table.Cell>{weather.weather[0].description}</Table.Cell>
            </Table.Row>
            </Table.Body>
            <Table.Footer>
            <Table.Row>
            </Table.Row>
            <Button inverted size='mini' onClick={() => removeCity(weather.id)}>Delete</Button>
            </Table.Footer>
        </Table>
        )
}
}
export default WeatherCity;