import * as unplugin from 'unplugin';
import { R as ResolvedOptions, S as ServerContext, O as Options } from './options-ChnxZdan.js';
export { D as DEFAULT_OPTIONS, E as EditableTreeNode, T as TreeNode, b as TreeNodeValueParam, d as TreeNodeValueStatic, c as createTreeNodeValue, g as getFileBasedRouteName, a as getPascalCaseRouteName } from './options-ChnxZdan.js';
export { NavigationGuard, NavigationGuardReturn, NavigationGuardTyped, NavigationGuardWithThis, NavigationGuardWithThisTyped, NavigationHookAfterTyped, ParamValue, ParamValueOneOrMore, ParamValueZeroOrMore, ParamValueZeroOrOne, RouteLocation, RouteLocationAsPathTyped, RouteLocationAsPathTypedList, RouteLocationAsRelativePath, RouteLocationAsRelativeTyped, RouteLocationAsRelativeTypedList, RouteLocationAsString, RouteLocationNormalized, RouteLocationNormalizedLoaded, RouteLocationNormalizedLoadedTyped, RouteLocationNormalizedLoadedTypedList, RouteLocationNormalizedTyped, RouteLocationNormalizedTypedList, RouteLocationRaw, RouteLocationResolved, RouteLocationResolvedTyped, RouteLocationResolvedTypedList, RouteLocationTyped, RouteLocationTypedList, RouteNamedMap, RouteParams, RouteParamsRaw, RouteRecordInfo, RouteRecordName, Router, RouterLinkPropsTyped, RouterLinkTyped, TypesConfig, UseLinkFnTyped, _RouteMapGeneric, _RouterOptions, _RouterTyped, _UseLinkReturnTyped } from './types.js';
import 'vue-router';
import 'vue';

declare function createRoutesContext(options: ResolvedOptions): {
    scanPages: (startWatchers?: boolean) => Promise<void>;
    writeConfigFiles: () => void;
    setServerContext: (_server: ServerContext) => void;
    stopWatcher: () => void;
    generateRoutes: () => string;
    generateVueRouterProxy: () => string;
    definePageTransform(code: string, id: string): unplugin.Thenable<unplugin.TransformResult>;
};

declare const _default: unplugin.UnpluginInstance<Options | undefined, boolean>;

/**
 * Adds useful auto imports to the AutoImport config:
 * @example
 * ```js
 * import { VueRouterAutoImports } from 'unplugin-vue-router'
 *
 * AutoImport({
 *   imports: [VueRouterAutoImports],
 * }),
 * ```
 */
declare const VueRouterAutoImports: Record<string, Array<string | [importName: string, alias: string]>>;

export { Options, VueRouterAutoImports, createRoutesContext, _default as default };
