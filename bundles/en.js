export default {
  // reusable image alt copy (use image path as index)
  'images.flask.alt': 'loading flask',
  // component copy
  'advisor.title': 'Antidote Advisor',
  'advisor.subtitle': 'Get a customized lesson path',
  'advisor.placeholder': 'I want to learn...',
  'advisor.button.label': 'Search Lesson Content',
  'advisor.prompt': 'Use the box above to say what you want to learn, and we’ll work with you to build a relevant learning path. Try “Ansible” or “Git”!',
  'catalog.filters.category.label': 'Category',
  'catalog.filters.category.placeholder': 'Label',
  'catalog.filters.tags.label': 'Tags',
  'catalog.filters.tags.placeholder': 'Label, Label',
  'catalog.search.label': 'Search',
  'catalog.search.placeholder': 'Lesson Title',
  'catalog.table.column.lesson.label': 'Lesson',
  'catalog.table.column.description.label': 'Description',
  'catalog.table.column.tags.label': 'Tags',
  'collection.details.type.label': 'Type',
  'collection.details.website.label': 'Website',
  'collection.details.email.label': 'Email',
  'collection.details.lessons.label': 'Lessons',
  'collection.details.lessons.empty.label': 'Coming Soon!',
  'collection.filters.name.label': 'Search Collections',
  'collection.filters.name.placeholder': 'Name',
  'collection.filters.type.label': 'Filter by Type',
  'collection.filters.type.placeholder': 'Type',
  'collection.type.name.label': 'Type',
  'collection.type.name.placeholder': 'Type',
  'collection.table.column.name.label': 'Name',
  'collection.table.column.description.label': 'Description',
  'course.plan.title': ({ coursePlanName, shortDesc }) => `${coursePlanName}'s Journey to ${shortDesc}`,
  'course.plan.title.no.name': ({ shortDesc }) => `Your Journey to ${shortDesc}`,
  'course.plan.skill.strength.beginner.message': 'Let\'s get learning.',
  'course.plan.skill.strength.intermediate.message': 'Let\'s do a quick review.',
  'course.plan.skill.strength.expert.message': 'You\'re an expert!',
  'course.plan.name.field.placeholder': 'Name',
  'course.plan.strength.modal.title': 'Identify your strengths',
  'course.plan.strength.modal.message': 'Answer the following questions, so we can construct the lesson plan most relevant to you!',
  'course.plan.strength.modal.prompt': ({ skill }) => `How well do you know ${skill}?`,
  'course.plan.strength.modal.option.rank.1.tooltip': 'Not at all',
  'course.plan.strength.modal.option.rank.2.tooltip': 'Beginner',
  'course.plan.strength.modal.option.rank.3.tooltip': 'Intermediate',
  'course.plan.strength.modal.option.rank.4.tooltip': 'Advanced',
  'course.plan.strength.modal.option.rank.5.tooltip': 'Expert',
  'course.plan.strength.modal.skip.button.label': 'Skip',
  'course.plan.strength.modal.submit.button.label': 'Submit',
  'lab.action.buttons.verify.label': 'Verify',
  'verification.modal.title': 'Verification',
  'verification.modal.pending.message': 'Still verifying...',
  'verification.modal.success.message': 'Successfully verified!',
  'verification.modal.failure.message': 'Failed to verify.',
  'verification.modal.error.message': 'An unexpected error occurred during verification.',
  'verification.modal.close.button.label': 'Close',
  'lab.tab.switcher.guide.tab.label': 'Guide',
  'lab.guidance.buttons.diagram.label': 'Diagram',
  'lab.guidance.buttons.video.label': 'Video',
  'lab.guidance.buttons.exit.label': 'Exit Lesson',
  'lab.guidance.modal.diagram.title': 'Lesson Diagram',
  'lab.guidance.modal.diagram.alt': 'lesson diagram',
  'lab.guidance.modal.video.title': 'Lesson Video',
  'lab.guidance.modal.objective.title': 'Lesson Objective',
  'lab.guidance.modal.close.button.label': 'Close',
  'lab.loading.modal.rolling.messages': [
    "Sweeping technical debt under the rug...",
    "Definitely not mining bitbucks in your browser...",
    "Duct-taping 53 javascript frameworks together...",
    "Dividing by < ERR - DIVIDE BY ZERO. SHUTTING DOWN. AND I WAS JUST LEARNING TO LOVE.....>",
    "I'd tell you a joke about UDP, but you probably wouldn't get it.",
    "Our Lab-Retriever, CloudDog, is still a puppy. Thanks for your patience.",
    "Calculating airspeed velocity of an unladen swallow..."
  ],
  'lab.loading.modal.lesson.loading.error.message': ({ error }) => `Error retrieving lesson: ${error}`,
  'lab.loading.modal.lesson.detail.loading.error.message': ({ error }) => `Error while waiting for lesson to initialize: ${error}`,
  'lab.loading.modal.lesson.loading.pending.message': 'Loading lesson...',
  'lab.loading.modal.lesson.initialization.pending.message': 'Waiting for lesson to finish initializing...',
  'lab.loading.modal.lesson.configuration.pending.message': 'Configuring endpoints for this lesson...',
  'lab.loading.modal.lesson.endpoints.pending.message': 'Waiting for lesson endpoints to become reachable...',
  'lab.stage.selector.previous.button.label': '< Previous>',
  'lab.stage.selector.next.button.label': 'Next >',
  'lab.stage.selector.tooltip.label': ({ i }) => `Part ${i}`,
  'ptr.banner.realm.label': 'Antidote Test Realm.',
  'promoted.lessons.title': 'Promoted Workflow Lessons:'
}
