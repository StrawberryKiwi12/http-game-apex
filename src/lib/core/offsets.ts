export const offsets = {
  button: {
    inSpeed: 0x074227d0,               // [Buttons]                        -> in_speed
    inAttack: 0x07422868               // [Buttons]                        -> in_attack
  },
  core: {
    levelName: BigInt(0x16f71e0),     // [Miscellaneous]                  -> LevelName
    clEntityList: BigInt(0x1e23418),  // [Miscellaneous]                  -> cl_entitylist
    localPlayer: BigInt(0x21d3758)    // [Miscellaneous]                  -> LocalPlayer
  },
  entity: {
    localOrigin: 0x0004,               // [DataMap.CBaseViewModel]         -> m_localOrigin
    iSignifierName: 0x04b0,            // [RecvTable.DT_BaseEntity]        -> m_iSignifierName
    lastVisibleTime: 0x1a44           // [Miscellaneous]                  -> CPlayer!lastVisibleTime ??
  },
  item: {
    highlightFunctionBits: 0x2c0,     // [RecvTable.DT_HighlightSettings] -> m_highlightFunctionBits ??
    customScriptInt: 0x1578           // [RecvTable.DT_PropSurvival]      -> m_customScriptInt
  },
  player: {
    glowEnable: 0x3c8,                // [RecvTable.DT_HighlightSettings] -> m_highlightServerContextID + 0x8 ??
    glowThroughWall: 0x3d0,           // [RecvTable.DT_HighlightSettings] -> m_highlightServerContextID + 0x10 ??
    iTeamNum: 0x037c,                  // [RecvTable.DT_BaseEntity]        -> m_iTeamNum
    iName: 0x04b9,                     // [RecvTable.DT_BaseEntity]        -> m_iName
    lifeState: 0x06c8,                 // [RecvTable.DT_Player]            -> m_lifeState
    vecPunchWeaponAngle: 0x23f8,      // [DataMap.C_Player]               -> m_currentFrameLocalPlayer.m_vecPunchWeapon_Angle
    viewAngle: 0x24e0,                // [DataMap.C_Player]               -> m_ammoPoolCapacity - 0x14
    bleedoutState: 0x26a0             // [RecvTable.DT_Player]            -> m_bleedoutState
  }
};
