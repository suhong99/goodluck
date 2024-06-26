import * as THREE from 'three';

type ShibaLocation = '강' | '집' | '언덕';

type ShibaBGNodes = {
  characters_STONE_a_0: THREE.Mesh;
  characters_STONE_a_0_1: THREE.Mesh;
  characters001_charcters_0: THREE.Mesh;
  characters002_watermill_0: THREE.Mesh;
  characters003_terrain_left_0: THREE.Mesh;
  characters004_house_0: THREE.Mesh;
  characters005_bridge_0: THREE.Mesh;
  characters006_tree_0: THREE.Mesh;
  characters007_bush_0: THREE.Mesh;
  characters007_bush_0_1: THREE.Mesh;
  characters008_water_0: THREE.Mesh;
  characters009_terrain_right_0: THREE.Mesh;
  characters010_wheat_0: THREE.Mesh;
};

type ShibaBGMaterials = {
  STONE_a: THREE.MeshBasicMaterial;
  charcters: THREE.MeshBasicMaterial;
  watermill: THREE.MeshBasicMaterial;
  terrain_left: THREE.MeshBasicMaterial;
  house: THREE.MeshBasicMaterial;
  bridge: THREE.MeshBasicMaterial;
  tree: THREE.MeshBasicMaterial;
  bush: THREE.MeshBasicMaterial;
  water: THREE.MeshBasicMaterial;
  terrain_right: THREE.MeshBasicMaterial;
  wheat: THREE.MeshBasicMaterial;
};

export type { ShibaBGMaterials, ShibaBGNodes, ShibaLocation };
