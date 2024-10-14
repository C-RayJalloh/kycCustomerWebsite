import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitForm } from "../services/apiSubmitKyc";

export function useCreate() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createMutate } = useMutation({
    mutationFn: submitForm,
    onSuccess: () => {
      queryClient.invalidateQueries("Customers");
    },
  });

  return { isCreating, createMutate };
}
