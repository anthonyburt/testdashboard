import React from 'react'
import {Treemap} from 'react-vis';

const myData = {
     "title": "analytics",
     "color": "#12939A",
     "children": [
      {
       "title": "cluster",
       "children": [
        {"title": "AgglomerativeCluster", "color": "#12939A", "size": 3938},
        {"title": "CommunityStructure", "color": "#12939A", "size": 3812},
        {"title": "HierarchicalCluster", "color": "#12939A", "size": 6714},
        {"title": "MergeEdge", "color": "#12939A", "size": 743}
       ]
      },
      {
       "title": "graph",
       "children": [
        {"title": "BetweennessCentrality", "color": "#12939A", "size": 3534},
        {"title": "LinkDistance", "color": "#12939A", "size": 5731},
        {"title": "MaxFlowMinCut", "color": "#12939A", "size": 7840},
        {"title": "ShortestPaths", "color": "#12939A", "size": 5914},
        {"title": "SpanningTree", "color": "#12939A", "size": 3416}
       ]
      },
      {
       "title": "optimization",
       "children": [
        {"title": "AspectRatioBanker", "color": "#12939A", "size": 7074}
       ]
      }
     ]
    }


class TreemapWidget extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

	render () {

        return (
            <Treemap
                title={'My New Treemap'}
                width={600}
                height={600}
                data={myData}
              />
        )
	}

}

export default TreemapWidget








