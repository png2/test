/**
 * Just to keep track of unimplemented things and make sure the programm doesn't crash when it encounter a valid but not implemented instruction
 */
module.exports.register = function({commandsProcessor, vocabularyProcessor, commandFiltersProcessor}) {
    var todoCommands = [
        'ShowBlogImage',
        'LikeBlogImage',
        'DislikeBlogImage',
        'ShowLikedImage',
        'ShowDislikedImage',
        'ShowTaggedImage',
        'StartStroking',
        'StartTaunts',
        'StopStroking',
        'StopTaunts',
        'Edge',
        'EdgeHold',
        'EdgeNoHold',
        'EdgeToRuin',
        'EdgeToRuinHold',
        'EdgeToRuinNoHold',
        'EdgeToRuinHoldSecret',
        'EdgeToRuinHoldSecret',
        'EdgeToRuinNoHoldSecret',
        ,'EdgeToRuinSecret',
        'EdgingDecide',
        'CBT',
        'CBTCock',
        'CBTBalls',
        'BookmarkModule',
        'BookmarkLink',
        'PlayCensorshipSucks',
        'PlayAvoidTheEdge',
        'ResumeAvoidTheEdge',
        'PlayRedLightGreenLight',
        'PlayVideoTeaseCensorshipSucks',
        'PlayCensorshipSucks',
        'PauseAvoidTheEdge',
        'PauseAvoidTheEdgeNoTaunts',
        'VitalSubAssignment',
        'CheckBnB',
        'CheckJOIVideo',
        'CheckStrokingState',
        'CheckTnA',
        'CheckVideo',
        'StopTnA',
        'StrokeFaster',
        'StrokeFastest',
        'StrokeSlower',
        'StrokeSlowest',
        'StrokeSpeedMax',
        'InterruptLongEdge'
    ];

    todoCommands.forEach((value)=>{
        commandsProcessor.registerCommand(value, (scriptParser, ui, settings, state, params)=> {
            ui.debug(`Should do ${value} but not implemented yet...`);
        });
    });
    
    var todoVocab = [
        'DomAge',
        'DomAvgCockMax',
        'DomAvgCockMin',
        'DomCup',
        'DomEyes',
        'DomHair',
        'DomLargeCockMin',
        'DomMood',
        'DomName',
        'DomSelfAgeMax',
        'DomSelfAgeMin',
        'DomSubAgeMax',
        'DomSubAgeMin',
        'GlitterContact1',
        'GlitterContact2',
        'GlitterContact3',
        'OrgasmLimitDate',
        'RANDNumberHigh',
        'RANDNumberLow',
        'ShorName',
        'SubAge',
        'SubBirthdayDay',
        'SubBirthdayMonth',
        'SubCockSize',
        'SubEyes',
        'SubHair',
        'SubName',
        'SubWritingTaskMax',
        'SubWritingTaskMin',
        'TagFurniture',
        'TagGarment',
        'TagSexToy',
        'TagTattoo',
        'TagUnderwear',
        'SearchImageBlog',
        'SearchImageBlogAgain',
        'SendDailyTasks'
    ];

    todoVocab.forEach((value)=>{
        vocabularyProcessor.registerVocabularyFilter(value, (settings, state, params)=> {
            return `${value}`;
        });
    });

    var filters = [
        '10MinuteHold',
        '15MinuteHold',
        '1MinuteHold',
        '2MinuteHold',
        '30MinuteHold',
        '3MinuteHold',
        '45MinuteHold',
        '4MinuteHold',
        '5MinuteHold',
        '60MinuteHold',
        'AlwaysAllowsOrgasm',
        'AlwaysRuinsOrgasm',
        'Angry',
        'ApathyLevel1',
        'ApathyLevel2',
        'ApathyLevel3',
        'ApathyLevel4',
        'ApathyLevel5',
        'Bratty',
        'Caring',
        'CBTLevel1',
        'CBTLevel2',
        'CBTLevel3',
        'CBTLevel4',
        'CBTLevel5',
        'ChastityPA',
        'ChristmasDay',
        'CockLarge',
        'CockSizeEnd',
        'CockSizeLarge',
        'CockSizeMedium',
        'CockSizeSmall',
        'CockSmall',
        'Crazy',
        'Cruel',
        'DommeLevel1',
        'DommeLevel2',
        'DommeLevel3',
        'DommeLevel4',
        'DommeLevel5',
        'FirstRound',
        'Flag',
        'HasChastity',
        'InChastity',
        'InterruptLongEdge',
        'LongEdge',
        'NeverAllowsOrgasm',
        'NeverRuinsOrgasm',
        'NewYearsEve',
        'OftenAllowsOrgasm',
        'OftenRuinsOrgasm',
        'OrgasmAllowed',
        'OrgasmRuined',
        'RarelyAllowsOrgasm',
        'RarelyRuinsOrgasm',
        'RuinTaunt',
        'SelfOld',
        'SelfYoung',
        'ShowBlogImage',
        'ShowBlowjobImage',
        'ShowBoobsImage',
        'ShowButtImage',
        'ShowCaptionsImage',
        'ShowCaptionsImage',
        'ShowDislikedImage',
        'ShowFemdomImage',
        'ShowGayImage',
        'ShowGeneralImage',
        'ShowGeneralImage',
        'ShowHardcoreImage',
        'ShowHentaiImage',
        'ShowLesbianImage',
        'ShowLezdomImage',
        'ShowLikedImage',
        'ShowLIkedImage',
        'ShowLocalImage',
        'ShowMaledomImage',
        'ShowSoftcoreImage',
        'ShowTaggedImage',
        'SometimesAllowsOrgasm',
        'SometimesruinsOrgasm',
        'SubBirthday',
        'SubCircumcised',
        'SubNotCircumcised',
        'SubNotPierced',
        'SubPierced',
        'Supremacist',
        'Tag',
        'TagAss',
        'TagBoobs',
        'TagCloseUp',
        'TagFace',
        'TagFeet',
        'TagFullyDressed',
        'TagGarmentCovering,
        'TagHalfDressed',
        'TagLegs',
        'TagMasturbating',
        'TagNaked',
        'TagNormal',
        'TagPiercing',
        'TagPussy',
        'TagSideView',
        'TagSucking',
        'TagTattoo',
        'TagUnderwear',
        'ValentinesDay',
        'VideoBlowjob',
        'VideoBlowjobDomme',
        'VideoFemdom',
        'VideoFemdomDomme',
        'VideoFemsub',
        'VideoGeneral',
        'VideoHardcore',
        'VideoHardcoreDomme',
        'VideoLesbian',
        'VideoLesbianDomme',
        'VideoSoftcore',
        'VideoSoftcoreDomme',
        'VitalSub',
        'VitalSubAssignment',
        'Vulgar'
    ];

    filters.forEach((filter)=>{
        commandFiltersProcessor.registerFilter(filter,()=>{
            console.log(`ignore : ${filter}`);
            return false;
        });
    });

    var wtfIsThat = [
        'CountdownAvoidTheEdge',
        'Custom1',
        'Custom2',
        'EdgingHold',
        'EdginStop',
        'EmbedImage',
        'GiveUpCheck',
        'InterruptStartStroking',
        'Module',
        'NewBlowImage',
        'SlowDownCheck',
        'SpeedUpCheck',
        'TnAFastSlides',
        'TnASlides',
        'TnASlowSlides',
        'VarCheck',
        'VTLength'
    ]

};