# SAP BAP (Business Application Programming) Workflow

## Componentes do Sistema SAP BAP

### ABAP (Advanced Business Application Programming)

- **Linguagem**: Específica da SAP para desenvolvimento
- **Funcionalidades**:
  - Criação de relatórios
  - Desenvolvimento de interfaces
  - Implementação de lógica de negócio

### SAP GUI (Graphical User Interface)

- **Interface de Usuário**: Acesso ao sistema SAP
- **Tipos**:
  - Dynpro (tradicional)
  - Web Dynpro (web)
  - Fiori (moderna e responsiva)

### RFC (Remote Function Call)

- **Protocolo**: Comunicação entre sistemas
- **Integração**: Conecta módulos SAP e sistemas externos

---

## Fluxo de Trabalho com Analogia 4 bits

### 1. Login no Sistema (0001)

```abap
DATA: lv_username TYPE usr02-bname,
      lv_password TYPE usr02-passwd,
      lv_valid    TYPE abap_bool.

PARAMETERS: p_user TYPE usr02-bname OBLIGATORY,
            p_pass TYPE usr02-passwd OBLIGATORY.

CALL FUNCTION 'SUSR_LOGIN_CHECK_RFC'
  EXPORTING
    bname  = p_user
    passwd = p_pass
  IMPORTING
    valid  = lv_valid.

IF lv_valid = abap_true.
  WRITE: 'Login successful'.
ELSE.
  WRITE: 'Invalid credentials'.
ENDIF.
```

### 2. Consulta de Relatório de Vendas (0010)

```abap
DATA: it_sales TYPE TABLE OF zsales,
      wa_sales TYPE zsales.

SELECT * FROM zsales INTO TABLE it_sales
  WHERE date = sy-datum.

LOOP AT it_sales INTO wa_sales.
  WRITE: / wa_sales-vbeln, wa_sales-matnr,
           wa_sales-quantity, wa_sales-netwr.
ENDLOOP.
```

### 3. Atualização de Estoque (0011)

```abap
PARAMETERS: p_prod_id TYPE zinventory-product_id OBLIGATORY,
            p_new_qty TYPE zinventory-quantity OBLIGATORY.

UPDATE zinventory
  SET quantity = p_new_qty
  WHERE product_id = p_prod_id.

IF sy-subrc = 0.
  WRITE: 'Stock updated'.
ELSE.
  WRITE: 'Update failed'.
ENDIF.
```

### 4. Integração com Sistema de Pagamento (0100)

```abap
DATA: lv_payment_data TYPE zpayment_data,
      lv_response     TYPE zpayment_response.

PARAMETERS: p_amount  TYPE zpayment_data-amount OBLIGATORY,
            p_account TYPE zpayment_data-account OBLIGATORY.

CALL FUNCTION 'Z_PAYMENT_SYSTEM_INTEGRATION'
  EXPORTING
    payment_data = lv_payment_data
  IMPORTING
    response     = lv_response.

IF lv_response-success = abap_true.
  WRITE: 'Payment processed'.
ELSE.
  WRITE: 'Payment failed'.
ENDIF.
```

---

## Fluxograma dos Processos

```
[Login (0001)] --> [Consulta Vendas (0010)] --> [Atualiza Estoque (0011)] --> [Integração Pagamento (0100)]
```

---

## Sintaxe ABAP Básica

### Estrutura de Programa

```abap
REPORT z_program_example.

* Declarações
DATA: lv_var TYPE i.

* Processamento
START-OF-SELECTION.
  PERFORM main_processing.

* Sub-rotinas
FORM main_processing.
  WRITE: 'Hello SAP World'.
ENDFORM.
```

### Comandos SQL

```abap
* SELECT
SELECT * FROM ztable INTO TABLE @DATA(it_data).

* INSERT
INSERT INTO ztable VALUES ls_data.

* UPDATE
UPDATE ztable SET field = value WHERE condition.

* DELETE
DELETE FROM ztable WHERE condition.
```

### Modularização

```abap
* Function Module
FUNCTION z_calculate_total.
  IMPORTING iv_value TYPE i
  EXPORTING ev_total TYPE i.
  ev_total = iv_value * 1.1.
ENDFUNCTION.

* Chamada
DATA(lv_result) = z_calculate_total(100).
```

---

## Conclusão

O SAP BAP oferece:

- Ambiente robusto para desenvolvimento empresarial
- Integração eficiente entre componentes
- Linguagem ABAP poderosa para lógica de negócios
- Fluxos de trabalho claros e bem definidos
