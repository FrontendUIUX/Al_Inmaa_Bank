document.addEventListener("DOMContentLoaded", function() {
    // Select the div to move
    const divToMove = document.getElementById("c8550e1c-75df-44c7-bbf9-664f0a3e3d2d_021c5380-e0aa-493c-a4e5-f995d800dd1e_46a2cd23-8b71-ffa0-ab2c-75ec40fb18c1_b32ef5dd-d098-4f15-a2e0-c5ffa5036c7f");
    
    // Select the .form div
    const formDiv = document.querySelector(".form");
    
    if (divToMove && formDiv) {
        // Remove the div from its current location
        divToMove.parentNode.removeChild(divToMove);
        
        // Append it after the .form div
        formDiv.insertAdjacentElement("afterend", divToMove);
    }
     const interval = setInterval(function () {
        const commentsSection = divToMove; // replace with the actual comments section ID or selector
        if (commentsSection) {
            clearInterval(interval);

            // Create a container for your attachments HTML
            const attachmentHTML = `
                <div id="c8550e1c-75df-44c7-bbf9-664f0a3e3d2d_021c5380-e0aa-493c-a4e5-f995d800dd1e_670a4cd6-be18-3c1a-1dfe-7205b9468cac_48ccda29-94f2-448b-bdee-389afebb2c9b" class=" visible grid bw enter-commits-behaviour without-header with-toolbar without-rownumbering without-summary without-aggregation without-footer" data-areaitemid="670a4cd6-be18-3c1a-1dfe-7205b9468cac" name="NR_MarketingRequest_Form_Stage Area Item2  view_move_leftattachmentSection" style="width:100%;" isdisabled="false">
							<div class="grid-toolbars">
								<div id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_48ccda29-94f2-448b-bdee-389afebb2c9b_toolbarGroup" class="toolbars single"><div id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_48ccda29-94f2-448b-bdee-389afebb2c9b_toolbar" class="toolbar"><div class="toolbar-wrapper"><table id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_c6815c56-3806-fab1-e0dd-950a21ee0559">
									<tbody><tr id="e228793c-8a8a-045e-1d57-0d2ca594e1d2">
										<td id="6cec7a20-b026-13a2-54f2-0a2e56dd48e1"><a id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_c314b9e9-dd18-3fe5-7948-5962325fc7ae_ToolbarButton" class="toolbar-button toolbar-button-inline add style-aware" name="Add ToolBar Button" tabindex="0" href="javascript:;"><span class="button-l"></span><span class="button-c"><span class="button-icon"></span><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><rect id="Rectangle 8" x="6" width="4" height="16" rx="1" fill="var(--toolbar-button-icon-highlight-color)" xmlns="http://www.w3.org/2000/svg"></rect><rect id="Rectangle 9" x="16" y="6" width="4" height="16" rx="1" transform="rotate(90 16 6)" fill="var(--toolbar-button-icon-highlight-color)" xmlns="http://www.w3.org/2000/svg"></rect></svg><span class="button-text">Add</span></span><span class="button-r"></span></a><a id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_a30cc3de-6eda-578d-c273-1c1c9846b0ab_ToolbarButton" class="toolbar-button toolbar-button-inline edit style-aware" name="Edit ToolBar Button" tabindex="0" href="javascript:;"><span class="button-l"></span><span class="button-c"><span class="button-icon"></span><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path id="Eraser" fill-rule="evenodd" clip-rule="evenodd" d="M15.3415 3.85529C14.9008 4.29605 14.1839 4.29605 13.7431 3.85529L12.1447 2.25689C11.704 1.81613 11.704 1.09924 12.1447 0.65848C13.0262 -0.223033 14.46 -0.223033 15.3415 0.65848C16.223 1.53999 16.223 2.97378 15.3415 3.85529Z" fill="var(--toolbar-button-icon-highlight-color)" xmlns="http://www.w3.org/2000/svg"></path><path id="Pencil" fill-rule="evenodd" clip-rule="evenodd" d="M11.3429 3.05875L12.9413 4.65715C13.382 5.09791 13.382 5.8148 12.9413 6.25556L4.94923 14.2476L0.7647 15.9522C0.562908 16.0266 0.323943 15.9841 0.175254 15.8619L0.148703 15.8354C-0.0583998 15.6283 1.37337e-05 15.4318 0.0478066 15.2088L1.75773 11.0561L9.74977 3.06406C10.1905 2.6233 10.9074 2.6233 11.3482 3.06406L11.3429 3.05875ZM2.55959 11.842L1.29042 14.7096L4.15269 13.4457L2.55959 11.842Z" fill="var(--toolbar-button-icon-base-color)" xmlns="http://www.w3.org/2000/svg"></path></svg><span class="button-text">Edit</span></span><span class="button-r"></span></a><a id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_cb285686-b437-2cbb-4f1b-cc41ddcddf99_ToolbarButton" class="toolbar-button toolbar-button-inline delete style-aware" name="Delete ToolBar Button" tabindex="0" href="javascript:;"><span class="button-l"></span><span class="button-c"><span class="button-icon"></span><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path id="X" d="M0.308 2.17467L2.17467 0.308C2.58533 -0.102667 3.25733 -0.102667 3.668 0.308L8.18533 5.39067L13.8227 0.388C14.2333 -0.0226666 14.9053 -0.0226666 15.316 0.388L15.6893 0.761333C16.1 1.172 16.1 1.844 15.6893 2.25467L10.5427 8.04667L15.6093 13.748C16.02 14.1587 16.02 14.8307 15.6093 15.2413L15.236 15.6147C14.8253 16.0253 14.1533 16.0253 13.7427 15.6147L8.196 10.6813L3.74267 15.6893C3.332 16.1 2.66 16.1 2.24933 15.6893L0.382667 13.8227C-0.028 13.412 -0.028 12.74 0.382667 12.3293L5.21467 8.036L0.308 3.668C-0.102667 3.25733 -0.102667 2.58533 0.308 2.17467Z" fill="var(--toolbar-button-icon-destructive-color)" xmlns="http://www.w3.org/2000/svg"></path></svg><span class="button-text">Delete</span></span><span class="button-r"></span></a><a id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_ecd9fdbd-c683-3975-2d31-fe40be93c73b_ToolbarButton" class="toolbar-button toolbar-button-inline save style-aware" name="Save ToolBar Button" tabindex="0" href="javascript:;"><span class="button-l"></span><span class="button-c"><span class="button-icon"></span><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path id="Lines" d="M4.5 9H11.5C11.775 9 12 9.225 12 9.5C12 9.775 11.775 10 11.5 10H4.5C4.225 10 4 9.775 4 9.5C4 9.225 4.225 9 4.5 9ZM4.5 11C4.225 11 4 11.225 4 11.5C4 11.775 4.225 12 4.5 12H11.5C11.775 12 12 11.775 12 11.5C12 11.225 11.775 11 11.5 11H4.5Z" fill="var(--toolbar-button-icon-base-secondary-color)" xmlns="http://www.w3.org/2000/svg"></path><path id="Disc" d="M6.48 0.5H9C9.275 0.5 9.5 0.5 9.5 0.5V4C9.5 4.275 9.275 4.5 9 4.5H6.48C6.205 4.5 5.98 4.275 5.98 4V0.5C5.98 0.5 6.205 0.5 6.48 0.5ZM0.5 1.5V14.5C0.5 15.05 0.95 15.5 1.5 15.5H14.5C15.05 15.5 15.5 15.05 15.5 14.5V3.475L12.405 0.5H11V5.5C11 5.775 10.775 6 10.5 6H3C2.725 6 2.5 5.775 2.5 5.5V0.5H1.5C0.95 0.5 0.5 0.95 0.5 1.5ZM13 7.5C13.275 7.5 13.5 7.725 13.5 8V13C13.5 13.275 13.275 13.5 13 13.5H3C2.725 13.5 2.5 13.275 2.5 13V8C2.5 7.725 2.725 7.5 3 7.5H13Z" fill="var(--toolbar-button-icon-base-color)" xmlns="http://www.w3.org/2000/svg"></path></svg><span class="button-text">Save</span></span><span class="button-r"></span></a></td>
									</tr>
								</tbody></table>
								</div></div><div id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_48ccda29-94f2-448b-bdee-389afebb2c9b_filter" class="toolbar hidden"><div class="toolbar-wrapper"><div class="filterContainer">
									<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" class="sprite-sheet" style="display:none">
	<symbol class="svg-icon add" id="svg-icon-add" viewBox="0 0 16 16">
		<rect id="Rectangle 8" x="6" width="4" height="16" rx="1" fill="var(--toolbar-button-icon-highlight-color)"></rect>
		<rect id="Rectangle 9" x="16" y="6" width="4" height="16" rx="1" transform="rotate(90 16 6)" fill="var(--toolbar-button-icon-highlight-color)"></rect>
	</symbol>
	<symbol class="svg-icon checkin" id="svg-icon-checkin" viewBox="0 0 16 16">
		<path id="Arrow" d="M1.06667 0H14.9333C15.52 0 16 0.48 16 1.06667V14.9333C16 15.52 15.52 16 14.9333 16H1.06667C0.48 16 0 15.52 0 14.9333V1.06667C0 0.48 0.48 0 1.06667 0ZM12.5333 2.13333C12.5333 2.13333 3.904 2.10667 3.728 2.13333C3.344 2.18667 2.97067 2.36267 2.672 2.66133C2.352 2.98133 2.17067 3.392 2.13333 3.808V12.5333C2.13333 13.2693 2.73067 13.8667 3.46667 13.8667C4.20267 13.8667 4.8 13.2693 4.8 12.5333V7.42933L10.6987 13.328C11.4293 14.0587 12.608 14.0587 13.3387 13.328C14.0693 12.5973 14.0693 11.4187 13.3387 10.688L7.45067 4.8H12.5333C13.2693 4.8 13.8667 4.20267 13.8667 3.46667C13.8667 2.73067 13.2693 2.13333 12.5333 2.13333Z" fill="var(--toolbar-button-icon-highlight-color)"></path>
	</symbol>
	<symbol class="svg-icon checkout" id="svg-icon-checkout" viewBox="0 0 16 16">
		<path id="Vector" d="M14.9333 16H1.06667C0.48 16 0 15.52 0 14.9333V1.06667C0 0.48 0.48 0 1.06667 0H14.9333C15.52 0 16 0.48 16 1.06667V14.9333C16 15.52 15.52 16 14.9333 16ZM3.46667 13.8667C3.46667 13.8667 12.096 13.8933 12.272 13.8667C12.656 13.8133 13.0293 13.6373 13.328 13.3387C13.648 13.0187 13.8293 12.608 13.8667 12.192V3.46667C13.8667 2.73067 13.2693 2.13333 12.5333 2.13333C11.7973 2.13333 11.2 2.73067 11.2 3.46667V8.57067L5.30133 2.672C4.57067 1.94133 3.392 1.94133 2.66133 2.672C1.93067 3.40267 1.93067 4.58133 2.66133 5.312L8.54933 11.2H3.46667C2.73067 11.2 2.13333 11.7973 2.13333 12.5333C2.13333 13.2693 2.73067 13.8667 3.46667 13.8667Z" fill="var(--toolbar-button-icon-highlight-color)"></path>
	</symbol>
	<symbol class="svg-icon delete" id="svg-icon-delete" viewBox="0 0 16 16">
		<path id="X" d="M0.308 2.17467L2.17467 0.308C2.58533 -0.102667 3.25733 -0.102667 3.668 0.308L8.18533 5.39067L13.8227 0.388C14.2333 -0.0226666 14.9053 -0.0226666 15.316 0.388L15.6893 0.761333C16.1 1.172 16.1 1.844 15.6893 2.25467L10.5427 8.04667L15.6093 13.748C16.02 14.1587 16.02 14.8307 15.6093 15.2413L15.236 15.6147C14.8253 16.0253 14.1533 16.0253 13.7427 15.6147L8.196 10.6813L3.74267 15.6893C3.332 16.1 2.66 16.1 2.24933 15.6893L0.382667 13.8227C-0.028 13.412 -0.028 12.74 0.382667 12.3293L5.21467 8.036L0.308 3.668C-0.102667 3.25733 -0.102667 2.58533 0.308 2.17467Z" fill="var(--toolbar-button-icon-destructive-color)"></path>
	</symbol>
	<symbol class="svg-icon delete-all" id="svg-icon-delete-all" viewBox="0 0 16 16">
		<path id="X" d="M6.3071 9.15365L7.22378 8.23697C7.42642 8.03433 7.75449 8.03433 7.95713 8.23697L10.1716 10.7313L12.9313 8.27556C13.134 8.07293 13.462 8.07293 13.6647 8.27556L13.848 8.4589C14.0506 8.66154 14.0506 8.98961 13.848 9.19225L11.3247 12.0291L13.8094 14.8274C14.0121 15.0301 14.0121 15.3581 13.8094 15.5608L13.6261 15.7441C13.4234 15.9467 13.0954 15.9467 12.8927 15.7441L10.1716 13.327L7.9909 15.7827C7.78826 15.9853 7.46019 15.9853 7.25755 15.7827L6.34087 14.866C6.13824 14.6634 6.13824 14.3353 6.34087 14.1327L8.70977 12.0291L6.30228 9.89182C6.09964 9.68918 6.09964 9.36111 6.30228 9.15847L6.3071 9.15365Z" fill="var(--toolbar-button-icon-destructive-color)"></path>
		<path id="Bin" d="M1.7237 2.92986H11.373C11.7734 2.92986 12.0967 3.25311 12.0967 3.65355C12.0967 4.054 11.7734 4.37725 11.373 4.37725H1.7237C1.32325 4.37725 1 4.054 1 3.65355C1 3.25311 1.32325 2.92986 1.7237 2.92986ZM4.85971 1.48246C4.85971 1.74782 5.07682 1.96493 5.34218 1.96493H7.7545C8.01985 1.96493 8.23696 1.74782 8.23696 1.48246C8.23696 1.21711 8.01985 1 7.7545 1H5.34218C5.07682 1 4.85971 1.21711 4.85971 1.48246ZM10.1668 5.34218V9.61681L10.2151 9.6747L11.6142 8.43477V5.347H10.1668V5.34218ZM10.9532 15.0011L10.2247 14.3546L9.22601 15.4739H9.68435C10.1716 15.4739 10.6107 15.2954 10.9532 15.0011ZM5.71367 15.4739L5.4049 15.1651C5.06717 14.8274 5.06717 14.2822 5.4049 13.9445L5.88254 13.5199C5.83911 13.3849 5.81982 13.2256 5.81982 13.0616V10.4418L5.33735 10.0124C4.99963 9.6747 4.99963 9.12952 5.33735 8.79179L5.81982 8.30933V5.33735H4.37242V13.298C4.37242 13.6985 4.04917 14.0217 3.64873 14.0217C3.24828 14.0217 2.92503 13.6985 2.92503 13.298V5.34218H1.48246V13.5441C1.48246 14.6103 2.34607 15.4739 3.41232 15.4739H5.71367ZM7.27203 7.04527C7.55186 6.97773 7.86546 7.05492 8.08257 7.27203L8.71942 7.98608V5.34218H7.27203V7.04527ZM7.27203 11.73V12.2897L7.58563 12.0098L7.27203 11.73Z" fill="var(--toolbar-button-icon-base-secondary-color)"></path>
	</symbol>
	<symbol class="svg-icon edit" id="svg-icon-edit" viewBox="0 0 16 16">
		<path id="Eraser" fill-rule="evenodd" clip-rule="evenodd" d="M15.3415 3.85529C14.9008 4.29605 14.1839 4.29605 13.7431 3.85529L12.1447 2.25689C11.704 1.81613 11.704 1.09924 12.1447 0.65848C13.0262 -0.223033 14.46 -0.223033 15.3415 0.65848C16.223 1.53999 16.223 2.97378 15.3415 3.85529Z" fill="var(--toolbar-button-icon-highlight-color)"></path>
		<path id="Pencil" fill-rule="evenodd" clip-rule="evenodd" d="M11.3429 3.05875L12.9413 4.65715C13.382 5.09791 13.382 5.8148 12.9413 6.25556L4.94923 14.2476L0.7647 15.9522C0.562908 16.0266 0.323943 15.9841 0.175254 15.8619L0.148703 15.8354C-0.0583998 15.6283 1.37337e-05 15.4318 0.0478066 15.2088L1.75773 11.0561L9.74977 3.06406C10.1905 2.6233 10.9074 2.6233 11.3482 3.06406L11.3429 3.05875ZM2.55959 11.842L1.29042 14.7096L4.15269 13.4457L2.55959 11.842Z" fill="var(--toolbar-button-icon-base-color)"></path>
	</symbol>
	<symbol class="svg-icon excel-doc" id="svg-icon-exceldocument" viewBox="0 0 16 16">
		<path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M8.73209 0H15.2632C15.7764 0 16.1963 0.41986 16.1963 0.933022V13.067C16.1963 13.5801 15.7764 14 15.2632 14H5.93302C5.41986 14 5 13.5801 5 13.067V3.73675C5 3.38395 5.07549 3.29687 5.17545 3.18156C5.19974 3.15355 5.22547 3.12387 5.25192 3.0883L5.26125 3.06964L5.27991 3.05098L8.04632 0.279907L8.06498 0.261246L8.08364 0.251916C8.12108 0.225037 8.152 0.198552 8.18132 0.173439C8.29448 0.0765102 8.38381 0 8.73209 0ZM8.73209 3.73209V0.933022L5.93302 3.73209H8.73209Z" fill="var(--toolbar-button-icon-base-color)"></path>
		<rect id="Rectangle 10" x="1" y="10" width="12" height="5" rx="1" fill="#008739"></rect>
		<path id="XLS" d="M5.88086 14H4.98828L4.43164 13.1074L3.88086 14H3.00781L3.95508 12.5391L3.06445 11.1445H3.91992L4.43555 12.0273L4.93164 11.1445H5.8125L4.9082 12.5996L5.88086 14ZM6.20312 14V11.1445H6.97461V13.377H8.07422V14H6.20312ZM10.3984 13.1328C10.3984 13.3099 10.3535 13.4674 10.2637 13.6055C10.1738 13.7422 10.0443 13.849 9.875 13.9258C9.70573 14.0013 9.50716 14.0391 9.2793 14.0391C9.08919 14.0391 8.92969 14.026 8.80078 14C8.67188 13.9727 8.53776 13.9258 8.39844 13.8594V13.1719C8.54557 13.2474 8.69857 13.3066 8.85742 13.3496C9.01628 13.3913 9.16211 13.4121 9.29492 13.4121C9.40951 13.4121 9.49349 13.3926 9.54688 13.3535C9.60026 13.3132 9.62695 13.2617 9.62695 13.1992C9.62695 13.1602 9.61589 13.1263 9.59375 13.0977C9.57292 13.0677 9.53841 13.0378 9.49023 13.0078C9.44336 12.9779 9.31706 12.9167 9.11133 12.8242C8.92513 12.7396 8.78516 12.6576 8.69141 12.5781C8.59896 12.4987 8.52995 12.4076 8.48438 12.3047C8.4401 12.2018 8.41797 12.0801 8.41797 11.9395C8.41797 11.6764 8.51367 11.4714 8.70508 11.3242C8.89648 11.1771 9.15951 11.1035 9.49414 11.1035C9.78971 11.1035 10.0911 11.1719 10.3984 11.3086L10.1621 11.9043C9.89518 11.7819 9.66471 11.7207 9.4707 11.7207C9.37044 11.7207 9.29753 11.7383 9.25195 11.7734C9.20638 11.8086 9.18359 11.8522 9.18359 11.9043C9.18359 11.9603 9.21224 12.0104 9.26953 12.0547C9.32812 12.099 9.48568 12.1797 9.74219 12.2969C9.98828 12.4076 10.1589 12.5267 10.2539 12.6543C10.3503 12.7806 10.3984 12.9401 10.3984 13.1328Z" fill="var(--toolbar-button-icon-base-color)"></path>
	</symbol>
	<symbol class="svg-icon filter" id="svg-icon-filter" viewBox="0 0 16 16">
		<path id="Vector" d="M14.94 1.39C14.83 1.13 14.63 1 14.35 1H1.65C1.37 1 1.18 1.13 1.06 1.39C0.95 1.66 1 1.89 1.2 2.08L6.01 8V11.91C6 12.08 6.06 12.23 6.19 12.36L8.91 14.81C9.03 14.94 9.18 15 9.36 15C9.44 15 9.53 14.98 9.61 14.95C9.87 14.84 10 14.64 10 14.37V8L12.47 4.96L14.8 2.08C15.01 1.89 15.06 1.66 14.94 1.38V1.39Z" fill="var(--toolbar-button-icon-base-color)"></path>
	</symbol>
	<symbol class="svg-icon generic" id="svg-icon-generic" viewBox="0 0 16 16">
		<rect width="16" height="16" rx="1" fill="var(--toolbar-button-icon-base-color)"></rect>
		<rect x="2" y="6" width="8" height="8" rx="1" fill="var(--toolbar-button-icon-base-secondary-color)"></rect>
	</symbol>
	<symbol class="svg-icon load" id="svg-icon-load" viewBox="0 0 16 16">
		<path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M8.73209 0H15.2632C15.7764 0 16.1963 0.41986 16.1963 0.933022V13.067C16.1963 13.5801 15.7764 14 15.2632 14H5.93302C5.41986 14 5 13.5801 5 13.067V3.73675C5 3.38395 5.07549 3.29687 5.17545 3.18156C5.19974 3.15355 5.22547 3.12387 5.25192 3.0883L5.26125 3.06964L5.27991 3.05098L8.04632 0.279907L8.06498 0.261246L8.08364 0.251916C8.12108 0.225037 8.152 0.198552 8.18132 0.173439C8.29448 0.0765102 8.38381 0 8.73209 0ZM8.73209 3.73209V0.933022L5.93302 3.73209H8.73209Z" fill="var(--toolbar-button-icon-base-color)"></path>
		<path id="Arrow" d="M12.0548 11.4834C12.0548 11.4834 12.0313 11.4599 12.0235 11.4521L8.79843 8.22701C8.49315 7.92173 8.00783 7.92173 7.70254 8.22701C7.39726 8.53229 7.39726 9.01762 7.70254 9.3229L9.59687 11.2172H0.782779C0.35225 11.2172 0 11.5695 0 12C0 12.4305 0.35225 12.7828 0.782779 12.7828H9.59687L7.70254 14.6771C7.39726 14.9824 7.39726 15.4677 7.70254 15.773C8.00783 16.0783 8.49315 16.0783 8.79843 15.773L12.0235 12.5479C12.3288 12.2661 12.3444 11.7887 12.0548 11.4834Z" fill="var(--toolbar-button-icon-highlight-color)"></path>
	</symbol>
	<symbol class="svg-icon pdf-doc" id="svg-icon-pdfdocument" viewBox="0 0 16 16">
		<path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M8.73209 0H15.2632C15.7764 0 16.1963 0.41986 16.1963 0.933022V13.067C16.1963 13.5801 15.7764 14 15.2632 14H5.93302C5.41986 14 5 13.5801 5 13.067V3.73675C5 3.38395 5.07549 3.29687 5.17545 3.18156C5.19974 3.15355 5.22547 3.12387 5.25192 3.0883L5.26125 3.06964L5.27991 3.05098L8.04632 0.279907L8.06498 0.261246L8.08364 0.251916C8.12108 0.225037 8.152 0.198552 8.18132 0.173439C8.29448 0.0765102 8.38381 0 8.73209 0ZM8.73209 3.73209V0.933022L5.93302 3.73209H8.73209Z" fill="var(--toolbar-button-icon-base-color)"></path>
		<rect id="Rectangle 10" x="1" y="10" width="12" height="5" rx="1" fill="#BB0706"></rect>
		<path id="PDF" d="M5.38086 12.0527C5.38086 12.3717 5.28646 12.6185 5.09766 12.793C4.91016 12.9661 4.64323 13.0527 4.29688 13.0527H4.08008V14H3.30859V11.1445H4.29688C4.65755 11.1445 4.92839 11.2233 5.10938 11.3809C5.29036 11.5384 5.38086 11.7624 5.38086 12.0527ZM4.08008 12.4238H4.2207C4.33659 12.4238 4.42839 12.3913 4.49609 12.3262C4.5651 12.2611 4.59961 12.1712 4.59961 12.0566C4.59961 11.8639 4.49284 11.7676 4.2793 11.7676H4.08008V12.4238ZM8.25977 12.5117C8.25977 12.9883 8.12826 13.3555 7.86523 13.6133C7.60352 13.8711 7.23503 14 6.75977 14H5.83594V11.1445H6.82422C7.28255 11.1445 7.63607 11.2617 7.88477 11.4961C8.13477 11.7305 8.25977 12.069 8.25977 12.5117ZM7.45898 12.5391C7.45898 12.2773 7.4069 12.0833 7.30273 11.957C7.19987 11.8307 7.04297 11.7676 6.83203 11.7676H6.60742V13.3672H6.7793C7.01367 13.3672 7.18555 13.2995 7.29492 13.1641C7.4043 13.0273 7.45898 12.819 7.45898 12.5391ZM9.5332 14H8.77344V11.1445H10.4609V11.7637H9.5332V12.3086H10.3887V12.9277H9.5332V14Z" fill="white"></path>
	</symbol>
	<symbol class="svg-icon refresh" id="svg-icon-refresh" viewBox="0 0 16 16">
		<path id="Arrow" d="M14.058 8.53831C13.6209 8.53831 13.2638 8.89007 13.2585 9.32712V9.29514C13.2585 9.48168 13.2478 9.43371 13.2318 9.61492C12.96 12.3011 10.6895 14.4011 7.92871 14.4011C4.98668 14.4011 2.59893 12.0133 2.59893 9.07129C2.59893 6.12925 4.98668 3.74151 7.92871 3.74151H9.86875L8.8028 4.46103C8.43504 4.7062 8.33911 5.20719 8.58961 5.56962C8.83478 5.93738 9.33578 6.03331 9.6982 5.78281L12.9014 3.62425C12.9387 3.5976 12.9707 3.57095 13.0027 3.53897C13.0027 3.53897 13.0133 3.53364 13.0133 3.52831C13.1679 3.37375 13.2532 3.17122 13.2532 2.95803C13.2532 2.75017 13.1679 2.54231 13.0133 2.38774C13.0133 2.38774 13.0027 2.38241 13.0027 2.37708C12.9707 2.3451 12.9387 2.31845 12.9014 2.29181L9.6982 0.138574C9.33045 -0.106595 8.83478 -0.0106593 8.58961 0.351766C8.34444 0.719521 8.44037 1.21519 8.8028 1.46036L9.81013 2.13724H7.77948C7.71552 2.13724 7.65157 2.14257 7.59294 2.15323C3.92072 2.33444 1 5.35643 1 9.07129C1 12.7861 4.10193 16 7.92871 16C11.7555 16 14.559 13.1859 14.8361 9.60959C14.8521 9.42838 14.8574 9.55097 14.8574 9.36975V9.32712C14.8574 8.89007 14.495 8.53831 14.058 8.53831Z" fill="var(--toolbar-button-icon-highlight-color)"></path>
	</symbol>
	<symbol class="svg-icon reset-validation-count" id="svg-icon-reset-validation-count" viewBox="0 0 16 16">
		<path id="Circle" d="M8 0C12.4213 0 16 3.584 16 8C16 12.416 12.416 16 8 16C3.584 16 0 12.4213 0 8C0 3.57867 3.584 0 8 0ZM8 1.06667C4.17067 1.06667 1.06667 4.17067 1.06667 8C1.06667 11.8293 4.17067 14.9333 8 14.9333C11.8293 14.9333 14.9333 11.8293 14.9333 8C14.9333 4.17067 11.8293 1.06667 8 1.06667Z" fill="var(--toolbar-button-icon-highlight-color)"></path>
		<path id="Arrow" d="M12.5227 7.19466C12.8693 7.33866 13.3387 7.664 13.3387 8.048C13.3387 8.432 12.8853 8.74667 12.5547 8.90133L6.38933 12.752C6.16533 12.896 5.95733 13.0293 5.696 13.0347C5.21066 13.0347 4.82133 12.6667 4.80533 12.1867V4.064C4.80533 3.584 5.20533 3.18933 5.696 3.18933C5.94666 3.18933 6.17066 3.296 6.43733 3.472L12.528 7.19466H12.5227Z" fill="var(--toolbar-button-icon-highlight-color)"></path>
	</symbol>
	<symbol class="svg-icon save" id="svg-icon-save" viewBox="0 0 16 16">
		<path id="Lines" d="M4.5 9H11.5C11.775 9 12 9.225 12 9.5C12 9.775 11.775 10 11.5 10H4.5C4.225 10 4 9.775 4 9.5C4 9.225 4.225 9 4.5 9ZM4.5 11C4.225 11 4 11.225 4 11.5C4 11.775 4.225 12 4.5 12H11.5C11.775 12 12 11.775 12 11.5C12 11.225 11.775 11 11.5 11H4.5Z" fill="var(--toolbar-button-icon-base-secondary-color)"></path>
		<path id="Disc" d="M6.48 0.5H9C9.275 0.5 9.5 0.5 9.5 0.5V4C9.5 4.275 9.275 4.5 9 4.5H6.48C6.205 4.5 5.98 4.275 5.98 4V0.5C5.98 0.5 6.205 0.5 6.48 0.5ZM0.5 1.5V14.5C0.5 15.05 0.95 15.5 1.5 15.5H14.5C15.05 15.5 15.5 15.05 15.5 14.5V3.475L12.405 0.5H11V5.5C11 5.775 10.775 6 10.5 6H3C2.725 6 2.5 5.775 2.5 5.5V0.5H1.5C0.95 0.5 0.5 0.95 0.5 1.5ZM13 7.5C13.275 7.5 13.5 7.725 13.5 8V13C13.5 13.275 13.275 13.5 13 13.5H3C2.725 13.5 2.5 13.275 2.5 13V8C2.5 7.725 2.725 7.5 3 7.5H13Z" fill="var(--toolbar-button-icon-base-color)"></path>
	</symbol>
	<symbol class="svg-icon undo-checkout" id="svg-icon-undocheckout" viewBox="0 0 16 16">
		<path id="Arrow" d="M14.9333 16H1.06667C0.48 16 0 15.52 0 14.9333V1.06667C0 0.48 0.48 0 1.06667 0H14.9333C15.52 0 16 0.48 16 1.06667V14.9333C16 15.52 15.52 16 14.9333 16ZM3.46667 13.8667C3.46667 13.8667 12.096 13.8933 12.272 13.8667C12.656 13.8133 13.0293 13.6373 13.328 13.3387C13.648 13.0187 13.8293 12.608 13.8667 12.192V3.46667C13.8667 2.73067 13.2693 2.13333 12.5333 2.13333C11.7973 2.13333 11.2 2.73067 11.2 3.46667V8.57067L5.30133 2.672C4.57067 1.94133 3.392 1.94133 2.66133 2.672C1.93067 3.40267 1.93067 4.58133 2.66133 5.312L8.54933 11.2H3.46667C2.73067 11.2 2.13333 11.7973 2.13333 12.5333C2.13333 13.2693 2.73067 13.8667 3.46667 13.8667Z" fill="var(--toolbar-button-icon-destructive-color)"></path>
	</symbol>
	<symbol class="svg-icon configure" id="svg-icon-configure" viewBox="0 0 16 16">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M16 5.93309C16 9.20984 13.3437 11.8662 10.0669 11.8662C9.11811 11.8662 8.22133 11.6435 7.42598 11.2475L4.05474 15.6102C3.68618 16.0872 2.98257 16.1321 2.55635 15.7059L0.29404 13.4436C-0.132179 13.0174 -0.0872588 12.3138 0.3897 11.9452L4.75251 8.57394C4.35653 7.77862 4.13383 6.88186 4.13383 5.93309C4.13383 2.65633 6.79016 0 10.0669 0C11.5559 0 12.9168 0.548494 13.9585 1.45445C13.8974 1.48525 13.8386 1.52275 13.7833 1.56699L10.1248 4.49381C9.67417 4.85431 9.62136 5.52035 10.0095 5.94735L11.2696 7.3334C11.6128 7.7109 12.1851 7.76953 12.5977 7.46946L15.9337 5.04326C15.9774 5.33352 16 5.63066 16 5.93309ZM3.81549 12.946C3.81549 13.3666 3.47454 13.7076 3.05396 13.7076C2.63338 13.7076 2.29243 13.3666 2.29243 12.946C2.29243 12.5255 2.63338 12.1845 3.05396 12.1845C3.47454 12.1845 3.81549 12.5255 3.81549 12.946Z" fill="var(--toolbar-button-icon-base-color)"></path>
	</symbol>
	<symbol class="svg-icon setasdefault" id="svg-icon-setasdefault" viewBox="0 0 32 32">
		<path d="M32 6.33L28.91 3.25L14.52 17.65L9.37001 12.5L6.29001 15.59L14.52 23.82L17.37 20.96L32 6.33Z" fill="var(--toolbar-button-icon-highlight-color)"></path>
		<path d="M26.09 16.14C26.1502 16.5908 26.1802 17.0452 26.18 17.5C26.1889 20.0606 25.3533 22.5528 23.8024 24.5904C22.2516 26.628 20.0721 28.0973 17.6017 28.7708C15.1312 29.4443 12.5075 29.2844 10.1371 28.3158C7.76675 27.3472 5.7819 25.624 4.49003 23.4132C3.19815 21.2023 2.67136 18.6271 2.99126 16.0865C3.31115 13.5459 4.45987 11.1817 6.25949 9.36011C8.0591 7.53849 10.4092 6.36112 12.9457 6.01038C15.4822 5.65964 18.0636 6.15509 20.29 7.42L22.41 5.31C19.6988 3.57515 16.4872 2.79237 13.2819 3.08517C10.0765 3.37796 7.05989 4.72967 4.70793 6.92703C2.35598 9.12438 0.802593 12.0423 0.292862 15.2204C-0.216869 18.3985 0.346072 21.6558 1.89287 24.4785C3.43967 27.3011 5.88226 29.5285 8.83527 30.809C11.7883 32.0895 15.0836 32.3504 18.2013 31.5504C21.319 30.7505 24.0816 28.9352 26.0533 26.3911C28.0249 23.8469 29.0933 20.7187 29.09 17.5C29.0885 16.2084 28.9102 14.9232 28.56 13.68L26.09 16.14Z" fill="var(--toolbar-button-icon-base-secondary-color)"></path>
	</symbol>
	<symbol class="svg-icon move-up" id="svg-icon-move-up" viewBox="0 0 32 32">
		<path d="M9.01792 10.6042L8.93912 10.6042C9.42081 10.876 9.98508 10.9547 10.521 10.825C11.0569 10.6953 11.5257 10.3664 11.8353 9.9031L13.0568 8.64118L13.0568 21L18.9673 21L18.9673 8.69126L20.3661 10.1435C20.6616 10.5216 21.0815 10.7786 21.5485 10.8669C22.0155 10.9552 22.4982 10.869 22.9076 10.6242C23.1067 10.5003 23.2795 10.3374 23.4161 10.1451C23.5528 9.95271 23.6505 9.7347 23.7037 9.50366C23.7568 9.27262 23.7643 9.03315 23.7258 8.79914C23.6872 8.56512 23.6033 8.34122 23.479 8.14042L23.4002 7.98017L17.4897 1.83081C17.1854 1.40215 16.7267 1.11318 16.2137 1.02688C15.7008 0.940581 15.175 1.06395 14.7511 1.37011L14.9284 1.37011L14.8299 1.44021C14.5772 1.60023 14.3565 1.80753 14.1798 2.05114L8.70269 7.73981C8.53396 7.94699 8.40799 8.1866 8.33232 8.44435C8.25664 8.7021 8.2328 8.97271 8.26222 9.24002C8.29164 9.50735 8.37371 9.7659 8.50355 10.0003C8.63338 10.2346 8.80832 10.44 9.01792 10.6042Z" fill="var(--toolbar-button-icon-highlight-color)"></path>
		<path d="M3 29.283L3 14.75C3 14.2946 3.18262 13.8579 3.50768 13.5359C3.83274 13.2139 4.27362 13.033 4.73333 13.033L9 13.033L9 16L6 16L6 28L26 28L26 16L23 16L23 13L27.2667 13.033C27.7264 13.033 28.1673 13.2139 28.4923 13.5359C28.8174 13.8579 29 14.2946 29 14.75L29 29.283C29 29.7384 28.8174 30.1751 28.4923 30.4971C28.1673 30.8191 27.7264 31 27.2667 31L4.73333 31C4.27362 31 3.83274 30.8191 3.50768 30.4971C3.18262 30.1751 3 29.7384 3 29.283Z" fill="var(--toolbar-button-icon-base-secondary-color)"></path>
	</symbol>
	<symbol class="svg-icon move-down" id="svg-icon-move-down" viewBox="0 0 32 32">
		<path d="M22.9821 21.3958H23.0609C22.5792 21.124 22.0149 21.0453 21.479 21.175C20.9431 21.3047 20.4743 21.6336 20.1647 22.0969L18.9432 23.3588V11H13.0327V23.3087L11.6339 21.8565C11.3384 21.4784 10.9185 21.2214 10.4515 21.1331C9.98451 21.0448 9.50182 21.131 9.09236 21.3758C8.89334 21.4997 8.7205 21.6626 8.58385 21.8549C8.44721 22.0473 8.34948 22.2653 8.29633 22.4963C8.24318 22.7274 8.23568 22.9669 8.27425 23.2009C8.31281 23.4349 8.39669 23.6588 8.52101 23.8596L8.59982 24.0198L14.5103 30.1692C14.8146 30.5978 15.2733 30.8868 15.7863 30.9731C16.2992 31.0594 16.825 30.936 17.2489 30.6299H17.0716L17.1701 30.5598C17.4228 30.3998 17.6435 30.1925 17.8202 29.9489L23.2973 24.2602C23.466 24.053 23.592 23.8134 23.6677 23.5556C23.7434 23.2979 23.7672 23.0273 23.7378 22.76C23.7084 22.4927 23.6263 22.2341 23.4965 21.9997C23.3666 21.7654 23.1917 21.56 22.9821 21.3958Z" fill="var(--toolbar-button-icon-highlight-color)"></path>
		<path d="M29 2.71698V17.25C29 17.7054 28.8174 18.1421 28.4923 18.4641C28.1673 18.7861 27.7264 18.967 27.2667 18.967H23V16H26V4H6V16H9V19L4.73333 18.967C4.27362 18.967 3.83274 18.7861 3.50768 18.4641C3.18262 18.1421 3 17.7054 3 17.25V2.71698C3 2.26161 3.18262 1.82489 3.50768 1.50289C3.83274 1.1809 4.27362 1 4.73333 1H27.2667C27.7264 1 28.1673 1.1809 28.4923 1.50289C28.8174 1.82489 29 2.26161 29 2.71698Z" fill="var(--toolbar-button-icon-base-secondary-color)"></path>
	</symbol>
	<symbol class="svg-icon advanced-filter" id="svg-icon-advanced-filter" viewBox="0 0 16 16">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M6 1V2.87494C5.92938 2.90252 5.85948 2.93151 5.79031 2.96189L4.46446 1.63604C4.07394 1.24551 3.44077 1.24551 3.05025 1.63604L1.63603 3.05025C1.24551 3.44078 1.24551 4.07394 1.63603 4.46447L2.96189 5.79032C2.93151 5.85948 2.90252 5.92939 2.87494 6H1C0.447715 6 0 6.44772 0 7V9C0 9.55228 0.447715 10 1 10H2.87494C2.90252 10.0706 2.93151 10.1405 2.96189 10.2097L1.63603 11.5355C1.24551 11.9261 1.24551 12.5592 1.63603 12.9497L3.05025 14.364C3.44077 14.7545 4.07394 14.7545 4.46446 14.364L5.79031 13.0381C5.85948 13.0685 5.92938 13.0975 6 13.1251V15C6 15.5523 6.44772 16 7 16H9C9.55228 16 10 15.5523 10 15V13.1251C10.0706 13.0975 10.1405 13.0685 10.2097 13.0381L11.5355 14.364C11.9261 14.7545 12.5592 14.7545 12.9498 14.364L14.364 12.9497C14.7545 12.5592 14.7545 11.9261 14.364 11.5355L13.0381 10.2097C13.0685 10.1405 13.0975 10.0706 13.1251 10H15C15.5523 10 16 9.55228 16 9V7C16 6.44772 15.5523 6 15 6H13.1251C13.0975 5.92939 13.0685 5.85948 13.0381 5.79032L14.364 4.46447C14.7545 4.07394 14.7545 3.44078 14.364 3.05025L12.9498 1.63604C12.5592 1.24551 11.9261 1.24551 11.5355 1.63604L10.2097 2.96189C10.1405 2.93151 10.0706 2.90252 10 2.87494V1C10 0.447715 9.55228 0 9 0H7C6.44772 0 6 0.447715 6 1ZM8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11ZM8 9C8.55229 9 9 8.55229 9 8C9 7.44772 8.55229 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55229 7.44772 9 8 9Z" fill="var(--toolbar-button-icon-base-color)"></path>
	</symbol>
	<symbol class="svg-icon filter" id="svg-icon-filter" viewBox="0 0 16 16">
		<path id="Vector" d="M14.94 1.39C14.83 1.13 14.63 1 14.35 1H1.65C1.37 1 1.18 1.13 1.06 1.39C0.95 1.66 1 1.89 1.2 2.08L6.01 8V11.91C6 12.08 6.06 12.23 6.19 12.36L8.91 14.81C9.03 14.94 9.18 15 9.36 15C9.44 15 9.53 14.98 9.61 14.95C9.87 14.84 10 14.64 10 14.37V8L12.47 4.96L14.8 2.08C15.01 1.89 15.06 1.66 14.94 1.38V1.39Z" fill="var(--toolbar-button-icon-base-color)"></path>
	</symbol>
</svg><span class="filterChosen filter"><span class="filterLabel">Selected Filter:</span><span class="searchDdl"><select name="670a4cd6-be18-3c1a-1dfe-7205b9468cac_48ccda29-94f2-448b-bdee-389afebb2c9b_selectedFilterDdl" id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_48ccda29-94f2-448b-bdee-389afebb2c9b_selectedFilterDdl" class="input-control" tabindex="-1" style="display: none;">

									</select><div id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_48ccda29-94f2-448b-bdee-389afebb2c9b" class="input-control select-box dropdown-box" style="width:;"><div class="styling-outer-wrapper"><div class="input-control-body  styling-left styling-inner-wrapper"><div class="input-control-t"><div class="input-control-t-l"></div><div class="input-control-t-c"></div><div class="input-control-t-r"></div></div><div class="input-control-m"><div class="input-control-m-l"></div><div class="input-control-m-c"><div class="input-control-wrapper"><a href="javascript:;" tabindex="0" class="input-control  styling-font"><span class="styling-font" title="Default">Default</span></a></div></div><div class="input-control-m-r"></div></div><div class="input-control-b"><div class="input-control-b-l"></div><div class="input-control-b-c"></div><div class="input-control-b-r"></div></div></div><div class="input-control-buttons styling-right styling-inner-wrapper"><a href="javascript:;" tabindex="-1" class="dropdown border-left-only"><span><span>...</span></span></a></div></div></div></span>&nbsp;<a id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_48ccda29-94f2-448b-bdee-389afebb2c9b_configFilter" title="Configure a new filter" class="toolbar-button toolbar-button-inline style-aware configure-filter" href="javascript:;"><span class="button-l"></span><span class="button-c"><span class="button-icon"></span><svg width="16" height="16"><use xlink:href="#svg-icon-configure"></use></svg></span><span class="button-r"></span></a></span><div class="quickSearch filter"><span class="filterLabel">Quick Search:</span> <span class="searchDdl"><select name="670a4cd6-be18-3c1a-1dfe-7205b9468cac_48ccda29-94f2-448b-bdee-389afebb2c9b_quickSearchDdl" id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_48ccda29-94f2-448b-bdee-389afebb2c9b_quickSearchDdl" class="input-control" tabindex="-1" style="display: none;"><option value="[All]">All fields</option><option value="bb553ec6-1a4e-6eb7-f13a-b600816764cf">Attachments</option></select><div id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_48ccda29-94f2-448b-bdee-389afebb2c9b" class="input-control select-box dropdown-box" style="width:;"><div class="styling-outer-wrapper"><div class="input-control-body  styling-left styling-inner-wrapper"><div class="input-control-t"><div class="input-control-t-l"></div><div class="input-control-t-c"></div><div class="input-control-t-r"></div></div><div class="input-control-m"><div class="input-control-m-l"></div><div class="input-control-m-c"><div class="input-control-wrapper"><a href="javascript:;" tabindex="0" class="input-control  styling-font"><span class="styling-font" title="All fields">All fields</span></a></div></div><div class="input-control-m-r"></div></div><div class="input-control-b"><div class="input-control-b-l"></div><div class="input-control-b-c"></div><div class="input-control-b-r"></div></div></div><div class="input-control-buttons styling-right styling-inner-wrapper"><a href="javascript:;" tabindex="-1" class="dropdown border-left-only"><span><span>...</span></span></a></div></div></div></span>&nbsp;<div class="filterTxt"><div class="input-control text-input">
										<div class="input-control-t">
											<div class="input-control-t-l">

											</div><div class="input-control-t-c">

											</div><div class="input-control-t-r">

											</div>
										</div><div class="input-control-m">
											<div class="input-control-m-l">

											</div><div class="input-control-m-c">
												<div class="input-control-wrapper">
													<input type="text" id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_48ccda29-94f2-448b-bdee-389afebb2c9b_quickSearchTxt" tabindex="0" class="input-control">
												</div>
											</div><div class="input-control-m-r">

											</div>
										</div><div class="input-control-b">
											<div class="input-control-b-l">

											</div><div class="input-control-b-c">

											</div><div class="input-control-b-r">

											</div>
										</div>
									</div></div>&nbsp;<a id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_48ccda29-94f2-448b-bdee-389afebb2c9b_quickSearchBtn" title="Apply quick search" class="toolbar-button toolbar-button-inline style-aware refresh" href="javascript:;"><span class="button-l"></span><span class="button-c"><span class="button-icon"></span><svg width="16" height="16"><use xlink:href="#svg-icon-refresh"></use></svg></span><span class="button-r"></span></a></div>
								</div></div></div></div>
							</div><div class="grid-body">
								<div class="grid-column-headers">
									<div class="grid-column-headers-wrapper">
										<table class="grid-column-header-table" tabindex="0" style="width: 669px;"><colgroup><col data-options="{&quot;name&quot;:&quot;670a4cd6-be18-3c1a-1dfe-7205b9468cac_843d6e37-6639-ec98-aa2c-80e75e2033dc&quot;,&quot;sortable&quot;:true,&quot;width&quot;:&quot;100%&quot;,&quot;datatype&quot;:&quot;text&quot;}" class="sortable" style="width:100%"></colgroup><tbody><tr><td><div class="grid-column-header-cell" style="width: 631.4px;">
											<div class="grid-column-header-cell-wrapper">
												<div class="grid-column-header-cell-content">
													<div title="Attachments" class="grid-column-header-text 670a4cd6-be18-3c1a-1dfe-7205b9468cac_a5df8721-81e0-ad90-a457-62d8e125b459 670a4cd6-be18-3c1a-1dfe-7205b9468cac_843d6e37-6639-ec98-aa2c-80e75e2033dc" style="text-align:;font-style:;font-weight:bold;">
														Attachments
													</div>
												</div>
											</div><div class="grid-column-header-divider ui-draggable ui-draggable-handle">

											</div>
										</div></td></tr></tbody></table>
									</div>
								</div><div class="grid-body-content">
									<div class="grid-body-content-wrapper">
										<div class="scroll-wrapper">
											<table class="grid-content-table zebra-stripes" tabindex="0"><colgroup><col data-options="{&quot;name&quot;:&quot;670a4cd6-be18-3c1a-1dfe-7205b9468cac_843d6e37-6639-ec98-aa2c-80e75e2033dc&quot;,&quot;sortable&quot;:true,&quot;width&quot;:&quot;100%&quot;,&quot;datatype&quot;:&quot;text&quot;}" class="sortable" style="width:100%"></colgroup><tbody><tr class="empty-grid"><td class="empty-grid" colspan="1"><div class="grid-content-cell">
												<div class="grid-content-cell-wrapper">
													No items to display
												</div>
											</div></td></tr></tbody></table>
										</div>
									</div>
								</div>
							</div><div class="grid-edit-templates">
								<table class="grid-edit-templates-table" style="width: 669px;"><colgroup><col data-options="{&quot;name&quot;:&quot;670a4cd6-be18-3c1a-1dfe-7205b9468cac_843d6e37-6639-ec98-aa2c-80e75e2033dc&quot;,&quot;sortable&quot;:true,&quot;width&quot;:&quot;100%&quot;,&quot;datatype&quot;:&quot;text&quot;}" class="sortable" style="width:100%"></colgroup>
									<tbody><tr>
										<td style="text-align:;vertical-align:;"><div class="grid-content-cell edit-mode">
											<div class="grid-content-cell-wrapper 670a4cd6-be18-3c1a-1dfe-7205b9468cac_843d6e37-6639-ec98-aa2c-80e75e2033dc">
												<div id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_023f968f-3d79-9e1e-4a67-47ec00666007_FilePanel" class="file-wrapper showinfo" name="Attachments File Attachment1" data-watermark="Click here to attach a file" tabindex="0" title="">
													<table class="file-table" cellpadding="0" cellspacing="0" style="height:54px;">
														<tbody><tr>
															<td id="c8550e1c-75df-44c7-bbf9-664f0a3e3d2d_021c5380-e0aa-493c-a4e5-f995d800dd1e_670a4cd6-be18-3c1a-1dfe-7205b9468cac_48ccda29-94f2-448b-bdee-389afebb2c9b_ctl33_670a4cd6-be18-3c1a-1dfe-7205b9468cac_023f968f-3d79-9e1e-4a67-47ec00666007_ThumbNail" class="file-tn-cell" style="width:54px;display:none;" align="center"><img id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_023f968f-3d79-9e1e-4a67-47ec00666007_FileThumbnail" class="file-thumbnail" src="" alt="File Type Icon" style="width: 32px; height: 32px; display: none;" title=""><img id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_023f968f-3d79-9e1e-4a67-47ec00666007_FileThumbnailError" class="file-thumbnail-error" src="/Runtime/WebResource.axd?d=_lxRnkjukfdehZi7-qvxs9tWBcIPASSDWtbsIsUoynOvV-EEflv995EJ-dbVonVtywWOVnp7uc-ThERdTN9G5b7BfnzEhQ_1ic1NYc3XeNP5wfuS2maEOgBCXSkz4xqS9nCilF34aQE2Udx_AOhgrLRPyq5hYpfFcY431P6WwdVQFF6HEcYfQnIWxnlGUcFh4sMMvC0JG1jJ51SOul8hEw-Qrm5013JDZZG4R_J4ZxCDTsUHR3cqLT3udFQoU3rr0&amp;t=638760764460407171" alt="File Type Icon" style="width:32px;height:32px;display:none;"><div class="file-progress-wrapper" style="width: 32px; height: 32px; display: none;">
																<svg style="width:21px;height:21px;" class="file-progress" viewBox="0 0 32 32" width="32px" height="32px">
                        <circle fill="#e6e9e0" stroke="none" cx="16" cy="16" r="16" fill-opacity="1"></circle>
                        <path class="piePath"></path>
                        <circle cx="16" cy="16" r="16" class="piePath" display="none"></circle>	
                        <circle fill="none" stroke="#ffffff" stroke-width="2" fill-opacity="0" cx="16" cy="16" r="15"></circle>
                        <circle r="5" cy="16" cx="16" stroke-width="2" stroke="#ffffff" fill="none"></circle>
                        <line stroke="#ffffff" y2="1" x2="16" y1="12" x1="16" stroke-width="2" fill="none"></line>
                        <line stroke="#ffffff" y2="20" x2="16" y1="31" x1="16" stroke-width="2" fill="none"></line>
                        <line fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="1" y1="16" x2="11" y2="16"></line>
                        <line fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="20" y1="16" x2="32" y2="16"></line>
                        <line fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="5" y1="27" x2="13" y2="19"></line>
                        <line fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="19" y1="13" x2="27" y2="5"></line>
                        <line fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="13" y1="13" x2="5" y2="5"></line>
                        <line fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="19" y1="19" x2="27" y2="27"></line>
                    </svg>
															</div></td>
															<td align="left" class="file-info-cell file-ellipsis" title=""><div class="file-watermark file-ellipsis">Click here to attach a file</div><div class="file-info file-ellipsis" display="none" style="display: none;"></div></td>
														</tr>
													</tbody></table>
													<label for="670a4cd6-be18-3c1a-1dfe-7205b9468cac_023f968f-3d79-9e1e-4a67-47ec00666007_file-inputId" style="height:54px;" class="file-label" title="">&nbsp;</label><div class="file-delete" style="display: none;">
														<div class="file-delete-img" title="Remove attached file">

														</div>
													</div>
												</div>
											</div>
										</div></td>
									</tr>
								</tbody></table>

							</div><div class="grid-display-templates">
								<table class="grid-display-templates-table" style="width: 669px;"><colgroup><col data-options="{&quot;name&quot;:&quot;670a4cd6-be18-3c1a-1dfe-7205b9468cac_843d6e37-6639-ec98-aa2c-80e75e2033dc&quot;,&quot;sortable&quot;:true,&quot;width&quot;:&quot;100%&quot;,&quot;datatype&quot;:&quot;text&quot;}" class="sortable" style="width:100%"></colgroup>
									<tbody><tr>
										<td style="text-align:;vertical-align:;"><div class="grid-content-cell">
											<div class="grid-content-cell-wrapper 670a4cd6-be18-3c1a-1dfe-7205b9468cac_843d6e37-6639-ec98-aa2c-80e75e2033dc">
												<div id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_7759ae17-ea84-33c6-5922-1e3751ce1630_FilePanel" class="file-wrapper showinfo" name="Attachments File Attachment" data-watermark="Click here to attach a file" tabindex="0" title="">
													<table class="file-table" cellpadding="0" cellspacing="0" style="height:54px;">
														<tbody><tr>
															<td id="c8550e1c-75df-44c7-bbf9-664f0a3e3d2d_021c5380-e0aa-493c-a4e5-f995d800dd1e_670a4cd6-be18-3c1a-1dfe-7205b9468cac_48ccda29-94f2-448b-bdee-389afebb2c9b_ctl40_670a4cd6-be18-3c1a-1dfe-7205b9468cac_7759ae17-ea84-33c6-5922-1e3751ce1630_ThumbNail" class="file-tn-cell" style="width:54px;display:none;" align="center"><img id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_7759ae17-ea84-33c6-5922-1e3751ce1630_FileThumbnail" class="file-thumbnail" src="" alt="File Type Icon" style="width:32px;height:32px;" title=""><img id="670a4cd6-be18-3c1a-1dfe-7205b9468cac_7759ae17-ea84-33c6-5922-1e3751ce1630_FileThumbnailError" class="file-thumbnail-error" src="/Runtime/WebResource.axd?d=_lxRnkjukfdehZi7-qvxs9tWBcIPASSDWtbsIsUoynOvV-EEflv995EJ-dbVonVtywWOVnp7uc-ThERdTN9G5b7BfnzEhQ_1ic1NYc3XeNP5wfuS2maEOgBCXSkz4xqS9nCilF34aQE2Udx_AOhgrLRPyq5hYpfFcY431P6WwdVQFF6HEcYfQnIWxnlGUcFh4sMMvC0JG1jJ51SOul8hEw-Qrm5013JDZZG4R_J4ZxCDTsUHR3cqLT3udFQoU3rr0&amp;t=638760764460407171" alt="File Type Icon" style="width:32px;height:32px;display:none;"><div class="file-progress-wrapper" style="width: 32px; height: 32px; display: none;">
																<svg style="width:21px;height:21px;" class="file-progress" viewBox="0 0 32 32" width="32px" height="32px">
                        <circle fill="#e6e9e0" stroke="none" cx="16" cy="16" r="16" fill-opacity="1"></circle>
                        <path class="piePath"></path>
                        <circle cx="16" cy="16" r="16" class="piePath" display="none"></circle>	
                        <circle fill="none" stroke="#ffffff" stroke-width="2" fill-opacity="0" cx="16" cy="16" r="15"></circle>
                        <circle r="5" cy="16" cx="16" stroke-width="2" stroke="#ffffff" fill="none"></circle>
                        <line stroke="#ffffff" y2="1" x2="16" y1="12" x1="16" stroke-width="2" fill="none"></line>
                        <line stroke="#ffffff" y2="20" x2="16" y1="31" x1="16" stroke-width="2" fill="none"></line>
                        <line fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="1" y1="16" x2="11" y2="16"></line>
                        <line fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="20" y1="16" x2="32" y2="16"></line>
                        <line fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="5" y1="27" x2="13" y2="19"></line>
                        <line fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="19" y1="13" x2="27" y2="5"></line>
                        <line fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="13" y1="13" x2="5" y2="5"></line>
                        <line fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="19" y1="19" x2="27" y2="27"></line>
                    </svg>
															</div></td>
															<td align="left" class="file-info-cell file-ellipsis" title=""><div class="file-watermark file-ellipsis">Click here to attach a file</div><div class="file-info file-ellipsis" display="none" style="display: none;"></div></td>
														</tr>
													</tbody></table>
													<label for="670a4cd6-be18-3c1a-1dfe-7205b9468cac_7759ae17-ea84-33c6-5922-1e3751ce1630_file-inputId" style="height:54px;" class="file-label" title="">&nbsp;</label><div class="file-delete" style="display: none;">
														<div class="file-delete-img" title="Remove attached file">

														</div>
													</div>
												</div>
											</div>
										</div></td>
									</tr>
								</tbody></table>

							</div>
						</div>
            `;

            // Insert after comments
            commentsSection.insertAdjacentHTML("afterend", attachmentHTML);
        }
    }, 1000); // check every 100ms until comments section exists
});



document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    try {
      // ===== Get user info from K2 SourceCode object =====
      const fqn = SourceCode.Forms.Settings.User.FQN;
      const userName = fqn.split("\\").pop();

      // ===== Get department text from form label =====
      const departmentEl = document.querySelector("[name='User_Department_DataLabel']");
      const department = departmentEl ? departmentEl.textContent.trim() : "Unknown Department";

      // ===== Sidebar configuration (dynamic links) =====
      const sidebarConfig = [
        {
          category: "Main Links",
          links: [
            {
              icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Dashboard.svg",
              name: "Dashboard",
              url: "/Runtime/Form/UserDashboard/"
            },
            {
              icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/My Requests.svg",
              name: "My Requests",
              url: "/"
            },
            {
              icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/report-and-analytics.svg",
              name: "Reports & Analytics",
              url: "#",
              children: [
                { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", name: "Marketing Dashboard", url: "#" },
                { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", name: "Communication Dashboard", url: "#" },
                { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", name: "Information Technology Dashboard", url: "#" }
              ]
            }
          ]
        },
        {
          category: "Departments",
          links: [
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Retail Banking.svg", name: "Retail & Digital Banking", url: "#", children: [] },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Human Capital Excellence.svg", name: "Marketing & Corporate", url: "#", children: [] },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Shariah.svg", name: "Shariah", url: "#", children: [] },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/information-technology.svg", name: "Information Technology", url: "#", children: [] },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Operations.svg", name: "Operations", url: "#", children: [] },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/facilities-management.svg", name: "Facilities Management", url: "#", children: [] },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Business Acquistion.svg", name: "Human Capital", url: "#", children: [] },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/risk-management.svg", name: "Risk Management", url: "#", children: [] }
          ]
        }
      ];

      // ===== Sidebar HTML skeleton =====
      document.body.insertAdjacentHTML("beforeend", `
        <aside class="sidebar">
          <div class="userSettings d-flex align-items-center">
            <div class="userProfile d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#userModal">
              <div class="userProfilePhoto">
                <img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/UserProfile.png" 
                     alt="${userName}" class="profilePhoto">
              </div>
              <div class="userInformations d-flex flex-column">
                <span class="username">${userName}</span>
                <span class="userPosition">${department}</span>
              </div>
            </div>
            <button class="notifications" data-bs-toggle="modal" data-bs-target="#notificationModal">
              <img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Notification.svg"/>
            </button>
          </div>
          <div class="sideBarLinksGroup"></div>
          <div class="light-dark-mode">
            <div class="toggle-label d-flex align-items-center justify-content-between">
              <img class="sun-img" src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Sun.svg" alt="">
              <span id="mode-label">Light Mode</span>
              <div class="form-check form-switch m-0">
                <input class="form-check-input" type="checkbox" role="switch" id="modeToggle">
              </div>
            </div>
          </div>
        </aside>
        <div class="overlayShadow" style="display:none;"></div>
        <aside class="subPanel">
          <div class="closeSubpanel">X</div>
          <div class="subPanelHeader"><h5 class="subSectionTitle"></h5></div>
          <div class="subPanelBody"><ul></ul></div>
        </aside>
      `);

      // ===== Render Sidebar Links =====
      const sidebarContainer = document.querySelector(".sideBarLinksGroup");
      const currentPath = window.location.pathname;

      sidebarConfig.forEach(section => {
        const category = document.createElement("div");
        category.classList.add("sidebarCategory");

        const title = document.createElement("h6");
        title.classList.add("categoryName");
        title.textContent = section.category;
        category.appendChild(title);

        const ul = document.createElement("ul");
        ul.classList.add("links");

        section.links.forEach(link => {
          const li = document.createElement("li");
          if (link.children && link.children.length > 0) {
            li.classList.add("isSubMenu");
          } else {
            li.classList.add("noSubChildren");
          }

          // mark active link based on current page
          if (link.url && currentPath === new URL(link.url, window.location.origin).pathname) {
            li.classList.add("active");
          }

          li.innerHTML = `
            <div class="icon"><img src="${link.icon}" alt=""></div>
            <a href="${link.url || '#'}">${link.name}</a>
          `;
          // ====== Add disabled class if href is empty or '#' ======
const anchor = li.querySelector("a");
if (!anchor.getAttribute("href") || anchor.getAttribute("href").trim() === "#" || anchor.getAttribute("href").trim() === "") {
  anchor.classList.add("disabled");
  anchor.setAttribute("aria-disabled", "true");
  anchor.setAttribute("tabindex", "-1"); // remove from tab order
}

// Prevent clicks on disabled links
anchor.addEventListener("click", (e) => {
  if (anchor.classList.contains("disabled")) {
    e.preventDefault();
    e.stopPropagation();
    // optional: show tooltip or message
  }
});
          ul.appendChild(li);
        });

        category.appendChild(ul);
        sidebarContainer.appendChild(category);
      });

      // ===== Submenu rendering logic =====
      const subPanel = document.querySelector(".subPanel");
      const subPanelList = subPanel.querySelector(".subPanelBody ul");
      const subPanelTitle = subPanel.querySelector(".subPanelHeader .subSectionTitle");
      const overlayShadow = document.querySelector(".overlayShadow");
      const closeSubpanelBtn = subPanel.querySelector(".closeSubpanel");

      function updateOverlay() {
        overlayShadow.style.display = subPanel.classList.contains("active") ? "block" : "none";
      }

      document.querySelectorAll(".isSubMenu").forEach(menu => {
        menu.addEventListener("click", e => {
          e.preventDefault();
          const title = menu.querySelector("a").innerText.trim();

          // find config
          let found = null;
          sidebarConfig.forEach(sec => {
            sec.links.forEach(l => {
              if (l.name === title) found = l;
            });
          });

          if (!found || !found.children || found.children.length === 0) {
            subPanel.classList.remove("active");
            updateOverlay();
            return;
          }

          subPanelTitle.textContent = title;
          subPanelList.innerHTML = "";

          found.children.forEach(child => {
            const li = document.createElement("li");
            li.innerHTML = `
              <div class="icon"><img src="${child.icon}" alt=""></div>
              <a href="${child.url}">${child.name}</a>
            `;
            subPanelList.appendChild(li);
          });

          subPanel.classList.add("active");
          updateOverlay();
        });
      });

      if (closeSubpanelBtn) {
        closeSubpanelBtn.addEventListener("click", () => {
          subPanel.classList.remove("active");
          updateOverlay();
        });
      }

    } catch (e) {
      console.error("Error rendering sidebar:", e);
    }
  }, 1000);
});



$(document).ready(function () {
  
  // Attach to ALL textboxes that are inside spans whose name contains "s_textbox"
 $(document).on('focus', '[name*=s_textbox] input, [name*=s_textbox] > input', function () {
  if (!$(this).is('[readonly]')) {
    $(this).closest('[name*=s_textbox]').addClass('on-focus');
  }
});

$(document).on('blur', '[name*=s_textbox] input, [name*=s_textbox] > input', function () {
  const $parent = $(this).closest('[name*=s_textbox]');
  // If textbox is empty, remove class
  if ($(this).val().trim() === '') {
    $parent.removeClass('on-focus');
  }
});


  // TextArea
$(document).on('focus', '[name*=s_textarea] textarea, [name*=s_textarea] > textarea', function () {
  if (!$(this).is('[readonly]')) {
    $(this).closest('[name*=s_textarea]').addClass('on-focus');
  }
});

$(document).on('blur', '[name*=s_textarea] textarea, [name*=s_textarea] > textarea', function () {
  const $parent = $(this).closest('[name*=s_textarea]');
  // If textarea is empty, remove class
  if ($(this).val().trim() === '') {
    $parent.removeClass('on-focus');
  }
});


});
// dropdown
document.addEventListener("DOMContentLoaded", function () {
  // Find all dropdown wrappers
  const wrappers = document.querySelectorAll('span[name*="s_dropdown"]');

  wrappers.forEach(wrapper => {
    const select = wrapper.querySelector("select");
    const icon = wrapper.querySelector(".dropdown");
    const visibleControl = wrapper.querySelector("a.input-control");
    const fontSpan = visibleControl ? visibleControl.querySelector(".styling-font") : null;

    // Add focus class only if NOT readonly or disabled
    const addFocus = () => {
      // if (select && (select.hasAttribute("readonly") || select.disabled)) return;
      wrapper.classList.add("on-focus");
    };

    // Check if user has selected a value (text inside .styling-font)
    const hasValue = () => fontSpan && fontSpan.textContent.trim() !== "";

    // When clicking dropdown icon
    if (icon) {
      icon.addEventListener("click", addFocus);
    }

    // When clicking visible control
    if (visibleControl) {
      visibleControl.addEventListener("click", addFocus);
    }

    // When hidden select changes (in case it updates .styling-font)
    if (select) {
      select.addEventListener("change", () => {
        addFocus();
      });
    }
  });

  // Remove on-focus only if no value selected
  document.addEventListener("click", function (e) {
    const clickedInside = e.target.closest('span[name*="s_dropdown"]');

    document.querySelectorAll('span[name*="s_dropdown"].on-focus').forEach(wrapper => {
      if (clickedInside && clickedInside === wrapper) return; // ignore clicks inside current wrapper

      const fontSpan = wrapper.querySelector(".styling-font");
      const hasValue = fontSpan && fontSpan.textContent.trim() !== "";

      if (!hasValue) {
        wrapper.classList.remove("on-focus");
      }
    });
  });
});

// stepper 
function updateStepStatus() {
  const statusMap = {
    0: "pendingStep",
    1: "inProgressStep",
    2: "completedStep"
  };

  document.querySelectorAll('[name*="s_step"]').forEach(step => {
    const stepNumberEl = step.querySelector('[name*="stepNumber"]');
    if (!stepNumberEl) return;

    // Force number comparison
    const stepNumber = parseInt(stepNumberEl.textContent.trim(), 10);

    // Remove all status classes before applying new one
    step.classList.remove(...Object.values(statusMap));

    if (statusMap.hasOwnProperty(stepNumber)) {
      step.classList.add(statusMap[stepNumber]);
    }
  });
}

function moveToNextStep() {
  const steps = Array.from(document.querySelectorAll('[name*="s_step"]'));

  // Find the step currently in progress
  const currentStep = steps.find(step =>
    step.classList.contains("inProgressStep")
  );

  if (currentStep) {
    const stepNumberEl = currentStep.querySelector('[name*="stepNumber"]');

    // Mark current step as completed (2)
    if (stepNumberEl) {
      stepNumberEl.textContent = "2";
    }

    // Move to next step and mark as in progress (1)
    const nextStep = steps[steps.indexOf(currentStep) + 1];
    if (nextStep) {
      const nextStepNumberEl = nextStep.querySelector('[name*="stepNumber"]');
      if (nextStepNumberEl) {
        nextStepNumberEl.textContent = "1";
      }
    }
  }

  // Refresh classes
  updateStepStatus();
}

function moveToPreviousStep() {
  const steps = Array.from(document.querySelectorAll('[name*="s_step"]'));

  // Find the step currently in progress
  const currentStep = steps.find(step =>
    step.classList.contains("inProgressStep")
  );

  if (currentStep) {
    const stepNumberEl = currentStep.querySelector('[name*="stepNumber"]');

    // Mark current step as pending (0)
    if (stepNumberEl) {
      stepNumberEl.textContent = "0";
    }

    // Move to previous step and mark as in progress (1)
    const prevStep = steps[steps.indexOf(currentStep) - 1];
    if (prevStep) {
      const prevStepNumberEl = prevStep.querySelector('[name*="stepNumber"]');
      if (prevStepNumberEl) {
        prevStepNumberEl.textContent = "1";
      }
    }
  }

  // Refresh classes
  updateStepStatus();
}

document.addEventListener("DOMContentLoaded", () => {
  updateStepStatus();

  const continueBtn = document.querySelector(
    "#d0300780-c69e-30af-366b-fb216c06c0a2_6aaf7a9c-0919-dc4a-0dd7-8e94cc163dec"
  );
  const backBtn = document.querySelector(
    "a#d0300780-c69e-30af-366b-fb216c06c0a2_80e627c7-7f8e-62f7-4f44-88a84122ffeb"
  );

  if (continueBtn) {
    continueBtn.addEventListener("click", event => {
      event.preventDefault();
      moveToNextStep();
    });
  }

  if (backBtn) {
    backBtn.addEventListener("click", event => {
      event.preventDefault();
      moveToPreviousStep();
    });
  }
});


// document.addEventListener("DOMContentLoaded", () => {
//   // Run on page load
//   updateStepStatus();

//   // Example: attach to a button if it exists
//   const button = document.querySelector("button#updateStepBtn"); // change selector as needed
//   if (button) {
//     button.addEventListener("click", () => {
//       const firstStep = document.querySelector('[name*="s_step"] [name*="stepNumber"]');
//       if (firstStep) {
//         firstStep.textContent = "1"; // Update dynamically
//         updateStepStatus();
//       }
//     });
//   }

//   // Attach to your specific link if it exists
//   const link = document.querySelector(
//     "div#a1785b7c-5537-44bf-a510-6f3e6760d6b1 a#d0300780-c69e-30af-366b-fb216c06c0a2_6aaf7a9c-0919-dc4a-0dd7-8e94cc163dec"
//   );
//   if (link) {
//     link.addEventListener("click", updateStepStatus);
//   }
// });


// Create the overlay div
const overlay = document.createElement("div");

// Add your CSS class (assuming you already defined `.overlay-shadow` in your stylesheet)
overlay.classList.add("overlayShadow");

// Append it to the body
document.body.appendChild(overlay);

function updateDropdownState(select) {
  const dropdownWrapper = select.closest(".s_dropdown");
  if (!dropdownWrapper) return;

  if (select.classList.contains("disabled") || select.disabled) {
    dropdownWrapper.classList.add("disabled");
  } else {
    dropdownWrapper.classList.remove("disabled");
  }
}

// Initial run (page load)
document.querySelectorAll("select").forEach(updateDropdownState);

// Watch for changes to class/attributes
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.target.tagName === "SELECT") {
      updateDropdownState(mutation.target);
    }
  });
});

// Observe all selects
document.querySelectorAll("select").forEach(select => {
  observer.observe(select, {
    attributes: true,
    attributeFilter: ["class", "disabled"] // only watch relevant changes
  });
});






//add readonly class to textbox

function updateTextboxState(input) {
  const textboxWrapper = input.closest(".s_textbox");
  if (!textboxWrapper) return;

  if (input.hasAttribute("readonly") || input.classList.contains("readonly")) {
    textboxWrapper.classList.add("readonly");
  } else {
    textboxWrapper.classList.remove("readonly");
  }
}

// Initial sync on page load
document.querySelectorAll('.s_textbox input[type="text"]').forEach(updateTextboxState);

// Watch for attribute/class changes dynamically
const observer1 = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.target.tagName === "INPUT") {
      updateTextboxState(mutation.target);
    }
  });
});

// Observe all text inputs inside .s_textbox
document.querySelectorAll('.s_textbox input[type="text"]').forEach(input => {
  observer.observe(input, {
    attributes: true,
    attributeFilter: ["readonly", "class"], // only watch relevant attributes
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const tableId = "ad572738-5d7f-182a-7ba6-e963826b1f74_2f633f38-daee-42d3-8b64-352ddb922960_Table";
    const tableEl = document.getElementById(tableId);

    if (tableEl) {
        // Create a header element
        const headerEl = document.createElement("header");

        // Move all child nodes of the table into the header
        while (tableEl.firstChild) {
            headerEl.appendChild(tableEl.firstChild);
        }

        // Optionally, insert the header before or after the table
        // For example, insert before the table
        tableEl.parentNode.insertBefore(headerEl, tableEl);

        // Remove the empty table if you don't need it anymore
        tableEl.remove();
    } else {
        console.warn(`Element with id ${tableId} not found.`);
    }
});




//// comments section 
// document.addEventListener("DOMContentLoaded", function () {
//     // Check if the sticky header already exists
//     let commentsSection = document.getElementById('commentsSection');
 
//     if (!commentsSection) {
//         // Create the sticky header container
//         commentsSection = document.createElement('div');
//         commentsSection.id = 'commentsSection';
//         document.body.prepend(commentsSection);
//     }
 
//     // Select elements to move
//     let commentsView = document.querySelector('[name*="commentsSection"]');
 
//     // Move elements inside the sticky header in order
//     if (commentsSection) {
//         commentsSection.appendChild(commentsView);
//     }
// });
 var fqn = null;
    // Menu items

   

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        try {
            const fqn = SourceCode.Forms.Settings.User.FQN;
            console.log("Logged-in User FQN: " + fqn);
        } catch (e) {
            console.error("Error retrieving FQN:", e);
        }
    }, 1000);
});


//////////////// end of k2 scripts




// const requestsData = [
//     { type: 'marketing', percentage: 56, elementId: 'marketing-request', percentId: 'marketing-request-percentage' },
//     { type: 'study', percentage: 20, elementId: 'request-a-study', percentId: 'request-study-percentage' },
//     { type: 'branch', percentage: 17, elementId: 'branch-visit-notes', percentId: 'branch-viti-percentage' },
//     { type: 'other', percentage: 7, elementId: 'other', percentId: 'other-percentage' },
// ];
// function showPercentages() {
//     requestsData.forEach(item => {
//         const percentElement = document.getElementById(item.percentId);
//         if (percentElement) {
//             percentElement.textContent = `${item.percentage}%`;
//         }
//     });
// }
// function animateSequentially(index = 0) {
//     if (index >= requestsData.length) return;

//     const item = requestsData[index];
//     const segmentElement = document.getElementById(item.elementId);

//     if (segmentElement) {
//         segmentElement.style.width = '0';
//         setTimeout(() => {
//             segmentElement.style.width = `${item.percentage}%`;
//             setTimeout(() => {
//                 animateSequentially(index + 1);
//             }, 1600);
//         }, 100);
//     }
// }

// document.addEventListener("DOMContentLoaded", () => {
//     showPercentages();
//     animateSequentially();
// });

document.addEventListener('DOMContentLoaded', () => {
    // 1. Create and append the progress bar container
    const progressBarContainer = document.createElement('div');
    progressBarContainer.className = 'progress-bar-container';
    progressBarContainer.id = 'progress-bar-container';

    progressBarContainer.innerHTML = `
        <div class="request-progress-zone marketing-request progress-segment" id="marketing-request"></div>
        <div class="request-progress-zone request-a-study progress-segment" id="request-a-study"></div>
        <div class="request-progress-zone branch-visit-notes progress-segment" id="branch-visit-notes"></div>
        <div class="request-progress-zone other progress-segment" id="other"></div>
    `;

    // 2. Insert it right after the #requests-total element
    const requestsTotalElement = document.getElementById('requests-total');
    if (requestsTotalElement && requestsTotalElement.parentNode) {
        requestsTotalElement.insertAdjacentElement('afterend', progressBarContainer);
    }

    // 3. Map request types to progress segment IDs
    const segmentMap = {
        'Marketing Request': 'marketing-request',
        'HR': 'request-a-study',
        'Accounting': 'branch-visit-notes',
        'Other': 'other'
    };

    // 4. Extract percentages from request cards
    const percentages = {};
    const requestCards = document.querySelectorAll('.request-card');

    requestCards.forEach(card => {
        const label = card.querySelector('.request-name span')?.textContent.trim();
        const percentText = card.querySelector('.percentage')?.textContent.trim();
        const percentValue = parseInt(percentText?.replace('%', ''), 10) || 0;

        const segmentId = segmentMap[label];
        if (segmentId) {
            percentages[segmentId] = percentValue;
        }
    });

    // 5. Animate each segment sequentially
    const segmentIdsInOrder = ['marketing-request', 'request-a-study', 'branch-visit-notes', 'other'];

    function animateSegment(index = 0) {
        if (index >= segmentIdsInOrder.length) return;

        const segmentId = segmentIdsInOrder[index];
        const segmentElement = document.getElementById(segmentId);
        const percentValue = percentages[segmentId] || 0;

        if (segmentElement) {
            segmentElement.style.width = '0'; // Reset
            setTimeout(() => {
                segmentElement.style.transition = 'width 1.5s ease';
                segmentElement.style.width = `${percentValue}%`;
                setTimeout(() => {
                    animateSegment(index + 1);
                }, 1600); // Delay before next
            }, 100);
        } else {
            animateSegment(index + 1);
        }
    }

    // Start the animation
    animateSegment();
});

// SIDE BAR SUBMENU 
document.addEventListener("DOMContentLoaded", () => {
    const subMenus = document.querySelectorAll(".isSubMenu");
    const subPanel = document.querySelector(".subPanel");
    const subPanelList = subPanel.querySelector(".subPanelBody ul");
    const subPanelTitle = subPanel.querySelector(".subPanelHeader .subSectionTitle");
    const overlayShadow = document.querySelector(".overlayShadow");
    const closeSubpanelBtn = subPanel.querySelector(".closeSubpanel");

    const submenuLinks = {
        "Reports & Analytics": [
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Marketing Dashboard", url: "#" },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Communication Dashboard", url: "#" },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Information Technology Dashboard", url: "#" }
        ],
        "Retail & Digital Banking": [
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Branch Reports", url: "#" },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Customer Insights", url: "#" }
        ],
        "Marketing & Corporate": [
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Campaign Performance", url: "#" }
        ],
        "Shariah": [],
        "Information Technology": [],
        "Operations": [],
        "Facilities Management": [],
        "Human Capital": [],
        "Risk Management": []
    };

    function renderSubLinks(title) {
        subPanelList.innerHTML = ""; // Clear old links

        if (submenuLinks[title] && submenuLinks[title].length > 0) {
            submenuLinks[title].forEach(link => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <div class="icon">
                        <img src="${link.icon}" alt="">
                    </div>
                    <a href="${link.url}">${link.text}</a>
                `;
                subPanelList.appendChild(li);
            });
            return true; 
        }
        return false;
    }

    // helper to sync overlay with active panels
    function updateOverlay() {
        const hasActivePanel = document.querySelector(".subPanel.active");
        if (overlayShadow) {
            overlayShadow.style.display = hasActivePanel ? "block" : "none";
        }
    }

    subMenus.forEach(menu => {
        menu.addEventListener("click", e => {
            e.preventDefault();

            const title = menu.querySelector("a").innerText.trim();

            // If no links → close panel and update overlay
            if (!submenuLinks[title] || submenuLinks[title].length === 0) {
                subPanel.classList.remove("active");
                updateOverlay();
                return;
            }

            // Update panel title
            subPanelTitle.textContent = title;

            if (subPanel.classList.contains("active")) {
                // remove first
                subPanel.classList.remove("active");

                // wait 1 second before adding back
                setTimeout(() => {
                    renderSubLinks(title);
                    subPanel.classList.add("active");
                    updateOverlay();
                }, 1000); // ← enforce 1 second delay
            } else {
                renderSubLinks(title);
                subPanel.classList.add("active");
                updateOverlay();
            }
        });
    });

    // Close Sub Panel
    if (closeSubpanelBtn) {
        closeSubpanelBtn.addEventListener("click", function(){
            subPanel.classList.remove("active");
            updateOverlay();
        });
    }
});


// Filter table by search input
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
// Animate Counters
function startOdometerWhenVisible(element) {
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var targetValue = parseFloat($(element).attr("data-stat")) || 0;

          var odometer = new Odometer({
            el: element,
            value: 0, // Start from 0
            duration: 4000,
            format: '(,ddd).d', // Include decimal point in the format
          });

          // Update the odometer value
          odometer.update(targetValue);

          // Add the currency label after the animation finishes
          odometer.on('stop', function() {
            var formattedValue = targetValue.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
            $(element).text(formattedValue + " USD M"); // Update text with currency and suffix
          });

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // Adjust threshold as needed
    }
  );
  observer.observe(element);
}
function initializeCounters() {
  $(".card .kpiValue").each(function () {
    startOdometerWhenVisible(this);
  });
}
initializeCounters();


// Light mode toggle
    $("#modeToggle").on("change", function () {
        if ($(this).is(":checked")) {
            $(".sun-img").hide();   
        } else {
            $(".sun-img").show();   
        }
    });


// SORT TABLE 
document.addEventListener("DOMContentLoaded", function () {
        const tbody = document.getElementById("requestsTable");
        const serviceHeader = document.querySelector("th.service span"); // span contains the SVG
        //const sortIcon = serviceHeader.querySelector("svg");

        let sortDirection = 1; // 1 = ascending, -1 = descending

        serviceHeader.addEventListener("click", function () {
            let rows = Array.from(tbody.querySelectorAll("tr"));

            rows.sort((a, b) => {
                let serviceA = a.querySelector("td[data-title='Service']").innerText.toLowerCase();
                let serviceB = b.querySelector("td[data-title='Service']").innerText.toLowerCase();

                if (serviceA < serviceB) return -1 * sortDirection;
                if (serviceA > serviceB) return 1 * sortDirection;
                return 0;
            });

            // Toggle sort direction
            sortDirection *= -1;

            // Re-append rows in sorted order
            rows.forEach(row => tbody.appendChild(row));

            // Toggle active class on the SVG
            // if(sortIcon){
            //     sortIcon.classList.toggle("active", sortDirection === -1);
            // }
        });
    });