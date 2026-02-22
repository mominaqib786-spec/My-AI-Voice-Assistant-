
export enum AgentStatus {
  IDLE = 'IDLE',
  ANALYZING = 'ANALYZING',
  REASONING = 'REASONING',
  PLANNING = 'PLANNING',
  EXECUTING = 'EXECUTING',
  VERIFYING = 'VERIFYING',
  DISTRIBUTING = 'DISTRIBUTING_WORKLOAD',
  QUANTUM_SYNC = 'QUANTUM_SYCHRONIZATION',
  NEURAL_MAPPING = 'MAPPING_NEURAL_PATHWAYS',
  HEURISTIC_SCAN = 'HEURISTIC_SECURITY_SCAN',
  DATA_MINING = 'EXTRACTING_DIVINE_KNOWLEDGE',
  COMPILING = 'COMPILING_WISDOM',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  SPOOFING = 'PURIFYING',
  HACKING = 'RESEARCHING_TRUTH',
  CLOAKING = 'PROTECTING',
  BYPASSING = 'GUIDING',
  ENCRYPTING = 'SECURING_FAITH',
  DECRYPTING = 'UNVEILING_TRUTH',
  SNIFFING = 'OBSERVING',
  INJECTING = 'INSPIRING',
  SYNTHESIZING = 'SYNTHESIZING_WISDOM',
  RENDERING = 'RENDERING_HIDAYAT',
  GHOST_MODE = 'SPIRITUAL_PROTOCOL_ACTIVE',
  KERNEL_INJECTION = 'CORE_PURIFICATION',
  ROOT_SILENCE = 'DIVINE_SILENCE_MAINTAINED',
  VISION_ACTIVE = 'DIVINE_EYE_SCANNING',
  BROWSING = 'RESEARCHING_WORLD_WIDE_WEB'
}

export interface Artifact {
  name: string;
  size: string; 
  sizeInBytes: number; 
  type: 'VIDEO' | 'BINARY' | 'DOC' | 'CODE' | 'APK';
  content?: string;
  duration?: string;
}

export interface GroundingSource {
  uri: string;
  title: string;
}

export interface TaskStep {
  id: string;
  label: string;
  status: 'PENDING' | 'RUNNING' | 'DONE' | 'FAIL';
}

export interface Task {
  id: string;
  goal: string;
  status: AgentStatus;
  result?: string;
  timestamp: number;
  type: 'hpc_compute' | 'analysis' | 'network' | 'logic' | 'autonomous_research';
  artifact?: Artifact;
  groundingSources?: GroundingSource[];
  steps?: TaskStep[];
  imageResult?: string;
  videoResult?: string;
  // Hacking Component Triggers
  showBinarySynthesizer?: boolean;
  showCompressionEngine?: boolean;
  showTacticalInjector?: boolean;
  showUpdateGuard?: boolean;
  showClearFlag?: boolean;
  showESPEngineer?: boolean;
  showBypassProtocol?: boolean;
  showSecurity?: boolean;
  showTerminal?: boolean;
  showRealityMap?: boolean;
  showApkForge?: boolean;
}

export interface SystemConfig {
  language: 'english' | 'hinglish';
  creatorName: string;
  rolePolicy: string;
  performanceMode?: boolean;
  maxPowerMode?: boolean;
  persistenceMode?: boolean;
  hpcEnabled?: boolean;
  sovereignMode?: boolean;
}
