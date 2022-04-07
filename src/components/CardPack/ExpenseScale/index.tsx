import * as React from 'react'
import { Box } from '@mui/material'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

type ExpenseScaleProps = {
	rating: number
}
export default function ExpenseScale({ rating = 0 }: ExpenseScaleProps) {
	const escale = () => {
		const stars = [false, false, false, false, false]
		for (let i = 0; i < rating; i++) {
			stars[i] = true
		}
		return stars
	}
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row'
			}}
		>
			{escale().map((item, index) => {
				return item ? (
					<MonetizationOnIcon key={index} color="primary" />
				) : (
					<AttachMoneyIcon key={index} color="primary" />
				)
			})}
		</Box>
	)
}
