export const addSynthNode = (position) => {
  return {
    type: 'ADD_SYNTH_NODE',
    position
  };
};

export const addMidiNode = (position) => {
  return {
    type: 'ADD_MIDI_NODE',
    position
  };
};

export const addAudioNode = (position) => {
  return {
    type: 'ADD_AUDIO_NODE',
    position
  };
};

export const setNodeOsc1Frequency = (id, frequency) => {
  return {
    type: 'SET_NODE_OSC1_FREQUENCY',
    id,
    frequency
  };
};

export const setNodeOsc2Frequency = (id, frequency) => {
  return {
    type: 'SET_NODE_OSC2_FREQUENCY',
    id,
    frequency
  };
};

export const setNodeVolume = (id, volume) => {
  return {
    type: 'SET_NODE_VOLUME',
    id,
    volume
  };
};

export const setNodeSource = (id, buffer, path) => {
  return {
    type: 'SET_NODE_SOURCE',
    id,
    buffer,
    path
  };
};

export const deleteNode = (id) => {
  return {
    type: 'DELETE_NODE',
    id
  };
};

export const selectNode = (id) => {
  return {
    type: 'SELECT_NODE',
    id
  };
};

export const deselectNodes = () => {
  return {
    type: 'DESELECT_NODES'
  };
};

export const selectAllNodes = () => {
  return {
    type: 'SELECT_ALL_NODES'
  };
};

export const setNodeOsc1WaveType = (id, waveType) => {
  return {
    type: 'SET_NODE_OSC1_WAVE_TYPE',
    id,
    waveType
  };
};

export const setNodeOsc2WaveType = (id, waveType) => {
  return {
    type: 'SET_NODE_OSC2_WAVE_TYPE',
    id,
    waveType
  };
};

export const cloneNode = (id) => {
  return {
    type: 'CLONE_NODE',
    id
  };
};

export const setNodeAttack = (id, value) => {
  return {
    type: 'SET_NODE_ATTACK',
    id,
    value
  };
};

export const setNodeRelease = (id, value) => {
  return {
    type: 'SET_NODE_RELEASE',
    id,
    value
  };
};

export const setNodeName = (id, name) => {
  return {
    type: 'SET_NODE_NAME',
    id,
    name
  };
};

export const setNodeDisabledStatus = (id, status) => {
  return {
    type: 'SET_NODE_DISABLED_STATUS',
    id,
    status
  };
};

export const setNodePan = (id, pan) => {
  return {
    type: 'SET_NODE_PAN',
    id,
    pan
  };
};

export const linkNodes = (srcId, destId) => {
  return {
    type: 'LINK_NODES',
    srcId,
    destId
  };
};

export const unlinkNodes = (srcId, destId) => {
  return {
    type: 'UNLINK_NODES',
    srcId,
    destId
  };
};

export const enqueueParticle = (id, particleId) => {
  return {
    type: 'ENQUEUE_PARTICLE',
    id,
    particleId
  };
};

export const dequeueParticle = (id, particleId) => {
  return {
    type: 'DEQUEUE_PARTICLE',
    id,
    particleId
  };
};

export const playNode = (id) => {
  return {
    type: 'PLAY_NODE',
    id
  };
};

export const stopNode = (id) => {
  return {
    type: 'STOP_NODE',
    id
  };
};

export const stopNodes = () => {
  return {
    type: 'STOP_NODES'
  };
};

export const setNodeLag = (id, lag) => {
  return {
    type: 'SET_NODE_LAG',
    id,
    lag
  };
};

export const setNodeProbability = (id, probability) => {
  return {
    type: 'SET_NODE_PROBABILITY',
    id,
    probability
  };
};

export const setNodeSendGain = (id, value) => {
  return {
    type: 'SET_NODE_SEND_GAIN',
    id,
    value
  };
};

export const setNodeNoiseGain = (id, value) => {
  return {
    type: 'SET_NODE_NOISE_GAIN',
    id,
    value
  };
};

export const setNodeOsc1Gain = (id, value) => {
  return {
    type: 'SET_NODE_OSC1_GAIN',
    id,
    value
  };
};

export const setNodeOsc2Gain = (id, value) => {
  return {
    type: 'SET_NODE_OSC2_GAIN',
    id,
    value
  };
};

export const setNodeVelocity = (id, value) => {
  return {
    type: 'SET_NODE_VELOCITY',
    id,
    value
  };
};

export const setNodeNote = (id, value) => {
  return {
    type: 'SET_NODE_NOTE',
    id,
    value
  };
};

export const updateSelectedNodePositionByDelta = (dx, dy) => {
  return {
    type: 'UPDATE_SELECTED_NODE_POSITION_BY_DELTA',
    dx,
    dy
  };
};

export const updateNodePositionByDelta = (dx, dy) => {
  return {
    type: 'UPDATE_NODE_POSITION_BY_DELTA',
    dx,
    dy
  };
};

export const hydrateNodes = (payload) => {
  return {
    type: 'HYDRATE_NODES',
    payload
  };
};
