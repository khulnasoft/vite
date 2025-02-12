  try {
    await github.rest.actions.createWorkflowDispatch({
      owner: context.repo.owner,
      repo: CONFIG.targetRepo,
      workflow_id: CONFIG.workflowFile,
      ref: CONFIG.defaultBranch,
      inputs: {
        "new-version": version,
      },
    });
  } catch (error) {
    throw new Error(`Failed to trigger workflow: ${error.message}`);
  }
      repo: CONFIG.targetRepo,
      workflow_id: CONFIG.workflowFile,
      ref: CONFIG.defaultBranch,
      inputs: {
        "new-version": version,
      },
    });
  } catch (error) {
    throw new Error(`Failed to trigger workflow: ${error.message}`);
  }
};
};
