<cfcomponent output="false" implements="MMSLinks.DDTools.PointData.IPTDisplay" extends="MMSLinks.DDTools.PointData.TableDisplay">
    <cffunction name ="GetBlowerSetting" hint="Fetches Blower Setting based on PLC Tag">
	
		<cfset system = createObject( "java", "java.lang.System" )>
		<cfset environment = system.getenv()>
        <cfset currentLine = left(#formData.line#, 1)>

        <cfif currentLine eq 1>
            <cfset currentLine = '0 - devonport/area/00 - system/mms tags/55 -tunnels/tunnel 1/55-166 blower speed sp'>
        <cfelseif currentLine eq 2>
            <cfset currentLine = '0 - devonport/area/00 - system/mms tags/55 -tunnels/tunnel 3/55-333 blower speed sp'>
        <cfelseif currentLine eq 3>
            <cfset currentLine = '0 - devonport/area/00 - system/mms tags/55 -tunnels/tunnel 4/55-433 blower speed sp'>
        </cfif>

		<cftry>
            <cfhttp result="Api_Response" method="GET" url="#environment.mdc_web_origin#/api/tagraws">
                <cfhttpparam type="url" name="tags" value=#currentLine#>
            </cfhttp>
            <cfset parsedPlcData = deserializeJSON(Api_Response.filecontent) />
            <cfreturn parsedPlcData[1].value.val>
            <cfcatch> 
                <cfreturn "">
            </cfcatch>
		</cftry>				
	</cffunction>
    <cffunction name="ProcessSubmittedForm">		
		<cfargument name="formData" />
        
		<cfif !isdefined("url.ID") AND (isdefined("url.Line") AND (url.Line NEQ '99' OR url.Line NEQ ''))>
			<cfset formData.BlowerSetting = GetBlowerSetting()>
		</cfif>
		<cfreturn super.ProcessSubmittedForm(formData) />
	</cffunction>
</cfcomponent>




<cfcomponent output="false" implements="MMSLinks.DDTools.PointData.IPTDisplay" extends="MMSLinks.DDTools.PointData.TableDisplay">
    <cffunction name ="Calculate_BlowerSetting" hint="Fetches Blower Setting based on PLC Tag">
		<cfargument name="formData" />

        
		<cfset system = createObject( "java", "java.lang.System" )>
		<cfset environment = system.getenv()>
        
        <cfset currentLine = left(#formData.line#, 1)>

        <cfif currentLine eq 1>
            <cfset currentLine = '0 - devonport/area/00 - system/mms tags/55 -tunnels/tunnel 1/55-166 blower speed sp'>
        <cfelseif currentLine eq 2>
            <cfset currentLine = '0 - devonport/area/00 - system/mms tags/55 -tunnels/tunnel 3/55-333 blower speed sp'>
        <cfelseif currentLine eq 3>
            <cfset currentLine = '0 - devonport/area/00 - system/mms tags/55 -tunnels/tunnel 4/55-433 blower speed sp'>
        </cfif>
       
        <cftry>
            <cfhttp result="Api_Response" method="GET" url="#environment.mdc_web_origin#/api/tagraws">
                <cfhttpparam type="url" name="tags" value=#currentLine#>
            </cfhttp>
            <cfset ArrayResult = deserializeJson(Api_Response.filecontent)/>
            <cfset formData.BlowerSetting = ArrayResult[1].Value.val>
        <cfcatch>
            <cfset formData.BlowerSetting = ''> 
        </cfcatch>
        </cftry>
	</cffunction>
</cfcomponent>








