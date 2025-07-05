
(function() {
    const { registerBlockType } = wp.blocks;
    const { InspectorControls, RichText, ColorPalette } = wp.blockEditor;
    const { PanelBody, TextControl, ToggleControl } = wp.components;
    const { Fragment } = wp.element;

    // LeadGrid Hero Block
    registerBlockType('leadgrid/hero', {
        title: 'LeadGrid Hero',
        icon: 'cover-image',
        category: 'leadgrid',
        attributes: {
            title: { type: 'string', default: '' },
            subtitle: { type: 'string', default: '' },
            description: { type: 'string', default: '' },
            button1Text: { type: 'string', default: '' },
            button2Text: { type: 'string', default: '' },
            backgroundColor: { type: 'string', default: '#1e40af' },
            textColor: { type: 'string', default: '#ffffff' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return (
                Fragment({},
                    wp.element.createElement(InspectorControls, {},
                        wp.element.createElement(PanelBody, { title: 'Hero Settings' },
                            wp.element.createElement(TextControl, {
                                label: 'Button 1 Text',
                                value: attributes.button1Text,
                                onChange: (value) => setAttributes({ button1Text: value })
                            }),
                            wp.element.createElement(TextControl, {
                                label: 'Button 2 Text',
                                value: attributes.button2Text,
                                onChange: (value) => setAttributes({ button2Text: value })
                            })
                        ),
                        wp.element.createElement(PanelBody, { title: 'Colors' },
                            wp.element.createElement('p', {}, 'Background Color'),
                            wp.element.createElement(ColorPalette, {
                                value: attributes.backgroundColor,
                                onChange: (value) => setAttributes({ backgroundColor: value })
                            }),
                            wp.element.createElement('p', {}, 'Text Color'),
                            wp.element.createElement(ColorPalette, {
                                value: attributes.textColor,
                                onChange: (value) => setAttributes({ textColor: value })
                            })
                        )
                    ),
                    wp.element.createElement('div', {
                        className: 'leadgrid-hero-edit',
                        style: {
                            background: attributes.backgroundColor,
                            color: attributes.textColor,
                            padding: '40px 20px',
                            textAlign: 'center'
                        }
                    },
                        wp.element.createElement(RichText, {
                            tagName: 'h1',
                            placeholder: 'Enter hero title...',
                            value: attributes.title,
                            onChange: (value) => setAttributes({ title: value }),
                            style: { fontSize: '2rem', marginBottom: '1rem' }
                        }),
                        wp.element.createElement(RichText, {
                            tagName: 'h2',
                            placeholder: 'Enter subtitle...',
                            value: attributes.subtitle,
                            onChange: (value) => setAttributes({ subtitle: value }),
                            style: { fontSize: '1.2rem', marginBottom: '1rem' }
                        }),
                        wp.element.createElement(RichText, {
                            tagName: 'p',
                            placeholder: 'Enter description...',
                            value: attributes.description,
                            onChange: (value) => setAttributes({ description: value }),
                            style: { fontSize: '1rem', marginBottom: '2rem' }
                        }),
                        wp.element.createElement('div', { className: 'hero-buttons' },
                            attributes.button1Text && wp.element.createElement('span', {
                                className: 'button-preview',
                                style: {
                                    background: 'rgba(255,255,255,0.2)',
                                    color: 'white',
                                    padding: '10px 20px',
                                    margin: '0 5px',
                                    border: '2px solid white',
                                    borderRadius: '4px'
                                }
                            }, attributes.button1Text),
                            attributes.button2Text && wp.element.createElement('span', {
                                className: 'button-preview',
                                style: {
                                    background: 'rgba(255,255,255,0.2)',
                                    color: 'white',
                                    padding: '10px 20px',
                                    margin: '0 5px',
                                    border: '2px solid white',
                                    borderRadius: '4px'
                                }
                            }, attributes.button2Text)
                        )
                    )
                )
            );
        },
        save: function() {
            return null; // Rendered server-side
        }
    });

    // LeadGrid Features Block
    registerBlockType('leadgrid/features', {
        title: 'LeadGrid Features',
        icon: 'grid-view',
        category: 'leadgrid',
        attributes: {
            title: { type: 'string', default: '' },
            items: { type: 'array', default: [] },
            backgroundColor: { type: 'string', default: '#f8fafc' }
        },
        edit: function(props) {
            const { attributes, setAttributes } = props;
            
            return (
                Fragment({},
                    wp.element.createElement('div', {
                        className: 'leadgrid-features-edit',
                        style: {
                            background: attributes.backgroundColor,
                            padding: '40px 20px'
                        }
                    },
                        wp.element.createElement(RichText, {
                            tagName: 'h2',
                            placeholder: 'Enter features title...',
                            value: attributes.title,
                            onChange: (value) => setAttributes({ title: value }),
                            style: { textAlign: 'center', marginBottom: '2rem' }
                        }),
                        wp.element.createElement('div', {
                            className: 'features-grid',
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '1rem'
                            }
                        },
                            attributes.items.map((item, index) =>
                                wp.element.createElement('div', {
                                    key: index,
                                    className: 'feature-item',
                                    style: {
                                        background: 'white',
                                        padding: '1rem',
                                        borderRadius: '4px',
                                        border: '1px solid #e5e7eb'
                                    }
                                },
                                    wp.element.createElement('h3', {}, item.title || 'Feature Title'),
                                    wp.element.createElement('p', {}, item.description || 'Feature description')
                                )
                            )
                        )
                    )
                )
            );
        },
        save: function() {
            return null;
        }
    });

    // Register block category
    wp.blocks.getCategories().push({
        slug: 'leadgrid',
        title: 'LeadGrid'
    });
})();
