import {
  getAnnotationNearPoint,
  getAnnotationNearPointOnEnabledElement,
} from './getAnnotationNearPoint'

// Lodash/common JS functionality
import debounce from './debounce'
import deepMerge from './deepMerge'
import throttle from './throttle'
import isObject from './isObject'
import calibrateImageSpacing from './calibrateImageSpacing'
import triggerAnnotationRenderForViewportUIDs from './triggerAnnotationRenderForViewportUIDs'
import transformPhysicalToIndex from './transformPhysicalToIndex'

import pointInShapeCallback from './pointInShapeCallback'
import pointInSurroundingSphereCallback from './pointInSurroundingSphereCallback'

// name spaces
import * as segmentation from './segmentation'
import * as drawing from './drawing'
import * as math from './math'
import * as planar from './planar'
import * as stackScrollTool from './stackScrollTool'
import * as viewportFilters from './viewportFilters'

// Events
import { triggerEvent } from '@cornerstonejs/core'

export {
  math,
  planar,
  viewportFilters,
  stackScrollTool,
  drawing,
  debounce,
  deepMerge,
  throttle,
  isObject,
  triggerEvent,
  calibrateImageSpacing,
  segmentation,
  triggerAnnotationRenderForViewportUIDs,
  pointInShapeCallback,
  pointInSurroundingSphereCallback,
  getAnnotationNearPoint,
  getAnnotationNearPointOnEnabledElement,
  transformPhysicalToIndex,
}

export default {
  math,
  planar,
  viewportFilters,
  stackScrollTool,
  drawing,
  debounce,
  deepMerge,
  throttle,
  isObject,
  triggerEvent,
  calibrateImageSpacing,
  transformPhysicalToIndex,
  segmentation,
  triggerAnnotationRenderForViewportUIDs,
  pointInShapeCallback,
  pointInSurroundingSphereCallback,
  getAnnotationNearPoint,
  getAnnotationNearPointOnEnabledElement,
}