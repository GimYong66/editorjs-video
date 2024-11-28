import { TunesMenuConfig } from '@editorjs/editorjs/types/tools';
import { ToolboxConfig, PasteConfig, BlockToolConstructorOptions, BlockTool, PasteEvent } from '@editorjs/editorjs';
import { ActionConfig, VideoToolData, VideoConfig } from './types/types';

type VideoToolConstructorOptions = BlockToolConstructorOptions<VideoToolData, VideoConfig>;
/**
 * Implementation of VideoTool class
 */
export default class VideoTool implements BlockTool {
    /**
     * Editor.js API instance
     */
    private api;
    /**
     * Current Block API instance
     */
    private block;
    /**
     * Configuration for the VideoTool
     */
    private config;
    /**
     * Uploader module instance
     */
    private uploader;
    /**
     * UI module instance
     */
    private ui;
    /**
     * Stores current block data internally
     */
    private _data;
    /**
     * @param tool - tool properties got from editor.js
     * @param tool.data - previously saved data
     * @param tool.config - user config for Tool
     * @param tool.api - Editor.js API
     * @param tool.readOnly - read-only mode flag
     * @param tool.block - current Block API
     */
    constructor({ data, config, api, readOnly, block }: VideoToolConstructorOptions);
    /**
     * Notify core that read-only mode is supported
     */
    static get isReadOnlySupported(): boolean;
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     */
    static get toolbox(): ToolboxConfig;
    /**
     * Available video tools
     */
    static get tunes(): Array<ActionConfig>;
    /**
     * Renders Block content
     */
    render(): HTMLDivElement;
    /**
     * Validate data: check if Video exists
     * @param savedData — data received after saving
     * @returns false if saved data is not correct, otherwise true
     */
    validate(savedData: VideoToolData): boolean;
    /**
     * Return Block data
     */
    save(): VideoToolData;
    /**
     * Returns configuration for block tunes: add background, add border, stretch video
     * @returns TunesMenuConfig
     */
    renderSettings(): TunesMenuConfig;
    /**
     * Fires after clicks on the Toolbox Video Icon
     * Initiates click on the Select File button
     */
    appendCallback(): void;
    /**
     * Specify paste substitutes
     * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
     */
    static get pasteConfig(): PasteConfig;
    /**
     * Specify paste handlers
     * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
     * @param event - editor.js custom paste event
     *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
     */
    onPaste(event: PasteEvent): Promise<void>;
    /**
     * Private methods
     * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
     */
    /**
     * Stores all Tool's data
     * @param data - data in Video Tool format
     */
    private set data(value);
    /**
     * Return Tool data
     */
    private get data();
    /**
     * Set new video file
     * @param file - uploaded file data
     */
    private set video(value);
    /**
     * File uploading callback
     * @param response - uploading server response
     */
    private onUpload;
    /**
     * Handle uploader errors
     * @param errorText - uploading error info
     */
    private uploadingFailed;
    /**
     * Callback fired when Block Tune is activated
     * @param tuneName - tune that has been clicked
     */
    private tuneToggled;
    /**
     * Set one tune
     * @param tuneName - {@link Tunes.tunes}
     * @param value - tune state
     */
    private setTune;
    /**
     * Show preloader and upload video file
     * @param file - file that is currently uploading (from paste)
     */
    private uploadFile;
    /**
     * Show preloader and upload video by target url
     * @param url - url pasted
     */
    private uploadUrl;
}
export {};
