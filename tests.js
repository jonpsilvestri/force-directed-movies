import { assert } from 'chai';
import { describe, it } from 'mocha';
import GraphClass from './GraphClass.js';

// some dummy graph data
const dummyGraphData = {
    nodes: [
        {id: 'tt0111161'},
        {id: 'tt0068646'},
        {id: 'tt0468569'},
        {id: 'tt0071562'},
        {id: 'tt0069699'}
    ],
    edges: [
        {source: 'tt0111161', target: 'tt0068646'},
        {source: 'tt0068646', target: 'tt0468569'},
        {source: 'tt0468569', target: 'tt0071562'}
    ],
    nodeDegrees: {
        'tt0111161': 1,
        'tt0068646': 2,
        'tt0468569': 2,
        'tt0071562': 1,
        'tt0069699': 0
    }
};

describe('GraphClass', function() {
    describe('#computeAPL()', function() {
        it('should compute the correct Average Shortest Path Length (APL) for the dummy graph data', function() {
            let graphInstance = new GraphClass();
            graphInstance.graph = dummyGraphData;
            const APL = graphInstance.computeAPL();
            /* 
                Check if APL is close enough to the expected values - 
                two APL values possible for dummyGraphData depending upon how you 
                handle multiple disconnected components in your calculations.
            */
            assert.ok(Math.abs(APL - 1.6666666666666667) < 1e-9 || Math.abs(APL - 0.8333333333333334) < 1e-9);
        });
    });

});

