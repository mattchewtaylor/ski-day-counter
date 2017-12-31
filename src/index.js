import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'

window.React = React

render(
	<SkiDayList days ={
		[
			{
				resort: "Aspen",
				date: new Date("12/30/2017"),
				powder: true,
				backcountry: false
			},
			{
				resort: "Vail",
				date: new Date("1/30/2018"),
				powder: false,
				backcountry: true
			},
			{
				resort: "A-Basin",
				date: new Date("2/30/2018"),
				powder: true,
				backcountry: false
			}
		]
	}/>,
	document.getElementById('react-container')
)
