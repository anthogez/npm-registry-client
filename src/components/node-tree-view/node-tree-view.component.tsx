import React, { useState, useEffect } from 'react';
import './node-tree-view.component.styles.scss';

import { Tree } from 'antd';
const { TreeNode } = Tree;

interface ITreeNodeProps {
	nodePackage?: any;
}

const displayChildren = (nodePackage: any) => {
	const list: any = [];

	if (Array.isArray(nodePackage.dependencies)) {
		nodePackage.dependencies = nodePackage.dependencies.filter(
			(dep: any) => dep !== null
		);
		nodePackage.dependencies.map((dep: any) => {
			const fullname = `${dep.name}@${dep.version}`;
			return list.push(
				<TreeNode title={fullname} key={fullname}>
					{dep.dependencies ? displayChildren(dep) : null}
				</TreeNode>
			);
		});
	}
	return list;
};

const displayParent = (nodePackage: any) => {
	const fullname = `${nodePackage.name}@${nodePackage.version}`;
	return (
		<TreeNode title={fullname} key={fullname}>
			{nodePackage.dependencies ? displayChildren(nodePackage) : null}
		</TreeNode>
	);
};

const NodeTreeView: React.FC<ITreeNodeProps> = ({ nodePackage }) => {
	const [nodeTreeView, setNodeTreeView] = useState(<div></div>);
	useEffect(() => {
		const viewResult = <Tree>{displayParent(nodePackage)}</Tree>;
		setNodeTreeView(viewResult);
	}, [nodePackage]);

	return nodeTreeView;
};

export default NodeTreeView;
