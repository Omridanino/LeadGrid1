
<?php if (is_active_sidebar('sidebar-1')) : ?>
    <aside class="widget-area" id="secondary">
        <div class="sidebar-container">
            <?php dynamic_sidebar('sidebar-1'); ?>
        </div>
    </aside>
<?php endif; ?>

<style>
/* Sidebar Styles */
.widget-area {
    background: #f8fafc;
    padding: 30px;
    border-radius: 15px;
    margin: 20px 0;
    border: 1px solid #e2e8f0;
}

.sidebar-container {
    max-width: 300px;
}

.widget {
    margin-bottom: 30px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.widget-title {
    color: #1e293b;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 15px;
    border-bottom: 2px solid #3b82f6;
    padding-bottom: 10px;
}

.widget ul {
    list-style: none;
    padding: 0;
}

.widget ul li {
    padding: 5px 0;
    border-bottom: 1px solid #e2e8f0;
}

.widget ul li:last-child {
    border-bottom: none;
}

.widget a {
    color: #64748b;
    text-decoration: none;
    transition: color 0.3s ease;
}

.widget a:hover {
    color: #3b82f6;
}

/* Search Widget */
.widget_search .search-form {
    display: flex;
    gap: 10px;
}

.widget_search input[type="search"] {
    flex: 1;
    padding: 10px;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    font-size: 14px;
}

.widget_search input[type="submit"] {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.widget_search input[type="submit"]:hover {
    background: #2563eb;
}

/* Categories and Archives */
.widget_categories ul,
.widget_archive ul {
    margin: 0;
}

.widget_categories li,
.widget_archive li {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.widget_categories .post-count,
.widget_archive .post-count {
    background: #e2e8f0;
    color: #64748b;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 12px;
}

/* Recent Posts */
.widget_recent_entries ul li {
    display: block;
    padding: 10px 0;
}

.widget_recent_entries a {
    font-weight: 500;
    color: #1e293b;
    line-height: 1.4;
}

.widget_recent_entries .post-date {
    color: #94a3b8;
    font-size: 12px;
    margin-top: 5px;
    display: block;
}

/* Tag Cloud */
.widget_tag_cloud .tagcloud {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.widget_tag_cloud .tagcloud a {
    background: #e2e8f0;
    color: #64748b;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 12px !important;
    text-decoration: none;
    transition: all 0.3s ease;
}

.widget_tag_cloud .tagcloud a:hover {
    background: #3b82f6;
    color: white;
}

/* Custom Contact Widget */
.contact-widget {
    text-align: center;
}

.contact-widget .contact-info {
    margin: 15px 0;
    line-height: 1.6;
}

.contact-widget .contact-button {
    background: #3b82f6;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    margin: 5px;
    transition: background 0.3s ease;
}

.contact-widget .contact-button:hover {
    background: #2563eb;
    color: white;
}

/* Responsive */
@media (max-width: 768px) {
    .widget-area {
        margin: 20px 0;
        padding: 20px;
    }
    
    .sidebar-container {
        max-width: 100%;
    }
}
</style>
