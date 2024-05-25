export const codeSnippetInterface = `
// Component interface
interface TextComponent {
    String getText();
}`;

export const codeSnippetConcrete = `
// Concrete component
class SimpleTextComponent implements TextComponent {
    @Override
    public String getText() {
        return "Plain text";
    }
}`;

export const codeSnippetDecorator = `
// Decorator abstract class
abstract class TextDecorator implements TextComponent {
    protected TextComponent textComponent;

    public TextDecorator(TextComponent textComponent) {
        this.textComponent = textComponent;
    }

    public String getText() {
        return textComponent.getText();
    }
}`;

export const codeSnippetImpl = `
// Bold decorator
class BoldDecorator extends TextDecorator {
    public BoldDecorator(TextComponent textComponent) {
        super(textComponent);
    }

    @Override
    public String getText() {
        return "<b>" + super.getText() + "</b>";
    }
}

// Italic decorator
class ItalicDecorator extends TextDecorator {
    public ItalicDecorator(TextComponent textComponent) {
        super(textComponent);
    }

    @Override
    public String getText() {
        return "<i>" + super.getText() + "</i>";
    }
}

// Underline decorator
class UnderlineDecorator extends TextDecorator {
    public UnderlineDecorator(TextComponent textComponent) {
        super(textComponent);
    }

    @Override
    public String getText() {
        return "<u>" + super.getText() + "</u>";
    }
}`;

export const codeSnippetMain = `
public class Main {
  public static void main(String[] args) {
      // Create a simple text component
      TextComponent simpleText = new SimpleTextComponent();
      System.out.println("Simple Text: " + simpleText.getText());

      // Decorate it with bold formatting
      TextComponent boldText = new BoldDecorator(simpleText);
      System.out.println("Bold Text: " + boldText.getText());

      // Decorate it with italic formatting
      TextComponent italicText = new ItalicDecorator(simpleText);
      System.out.println("Italic Text: " + italicText.getText());

      // Decorate it with underline formatting
      TextComponent underlinedText = new UnderlineDecorator(simpleText);
      System.out.println("Underlined Text: " + underlinedText.getText());
  }
}`;
