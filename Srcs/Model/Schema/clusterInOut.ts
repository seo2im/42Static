import { Schema, model } from 'mongoose'

const ClusterInOut = new Schema({
    "day": {
        "type": "Number"
    },
    "timestamp": {
        "type": "Number"
    },
    "location": {
        "type": "Number"
    },
    "inout": {
        "type": "Number"
    },
    "id": {
        "type": "String"
    },
})

export default model('clusterInOut', ClusterInOut, 'clusterInOut')
