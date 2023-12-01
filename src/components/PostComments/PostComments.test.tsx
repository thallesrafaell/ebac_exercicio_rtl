import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve renderizar comentario corretamente", () => {
    render(<PostComment />);
    const form = screen.getByTestId("btn-adicionar-comentario");
    const comments = screen.getByTestId("txt-comments");

    fireEvent.change(comments, {
      target: {
        value: "Legal a miniatura",
      },
    });
    fireEvent.submit(form);

    fireEvent.change(comments, {
      target: {
        value: "Muito real , que demais",
      },
    });
    fireEvent.submit(form);

    const result = screen.getAllByTestId("item-comment");
    expect(result).toHaveLength(2);
  });
});
