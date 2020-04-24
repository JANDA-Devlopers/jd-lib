import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Table, { JDcolumn, ReactTableDefault } from './Table';
import '../../scss/all.scss';
import JDcontainer from '../container/Container';
import MDX from './table.mdx';
import JDtypho from '../typho/Typho';
export default {
	title: 'Table',
	component: Table,
	decorators: [ withKnobs ],
	parameters: {
		componentSubtitle: '테이블컴포넌트',
		docs: {
			page: MDX
		}
	}
};

type TData = {
	name: string;
	phone: string;
};

const data: TData[] = [
	{
		name: '김민재',
		phone: '010-5237-4492'
	},
	{
		name: '배경렬',
		phone: '010-5237-4495'
	},
	{
		name: '도롱뇽',
		phone: '010-5237-4494'
	},
	{
		name: '왈라비',
		phone: '010-5237-4493'
	}
];

export const standard = () => {
	const TableColumns: JDcolumn<TData>[] = [
		{
			Header: () => (
				<div>
					<JDtypho size="small">"잔다멤버"</JDtypho>
				</div>
			),
			accessor: 'name',
			Cell: ({ value }) => {
				return <JDtypho size="small">{value}</JDtypho>;
			}
		},
		{
			Header: '전화번호',
			accessor: 'phone',
			Cell: ({ value, original }) => {
				return (
					<div>
						<h6>{value}</h6>
						{original.name}
					</div>
				);
			}
		}
	];
	return (
		<JDcontainer verticalPadding>
			<Table {...ReactTableDefault} data={data} columns={TableColumns} />
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};