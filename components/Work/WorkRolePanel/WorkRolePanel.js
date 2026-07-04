const WorkRolePanel = ({ title, subtitle }) => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-purple/10 via-white to-indigo-dark/10 p-6 dark:from-purple/25 dark:via-gray-dark-2 dark:to-indigo-dark/20">
    <p className="text-center text-xl font-semibold text-gray-dark-1 dark:text-white">
      {title}
    </p>
    {subtitle ? (
      <p className="text-center text-sm text-gray-dark-3 dark:text-gray-light-2">
        {subtitle}
      </p>
    ) : null}
  </div>
);

export default WorkRolePanel;
